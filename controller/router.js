const express = require('express')
const bodyParser = require('body-parser')
const crypto = require("crypto")
const path = require('path');
const router = express.Router()

const wifi = require('./WIFI')

router.use(bodyParser.urlencoded({ extended: true }));

// router.get('/:name', (req, res) => {
//     const wifi_name = req.params.name
//     const found = wifi.some(wifi => wifi.username === wifi_name)

//     if(found){
//         const pw_object = wifi.filter( wifi => wifi.username === wifi_name )[0]
//         res.send(`Wifi password for ${pw_object.username}: ${pw_object.password}` )
//     }else{
//         res.status(400).send(`Page not available`)
//     }
//     // 
// })
    
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})

router.post('/', (req, res) => {
    const username = req.body.username
    const masterpw = req.body.password

    // The `generateKeyPairSync` method accepts two arguments:
    // 1. The type ok keys we want, which in this case is "rsa"
    // 2. An object with the properties of the key
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        // The standard secure default length for RSA keys is 2048 bits
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    })
    console.log(publicKey.toString())

    const encryptedMasterpw = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        // We convert the data string to a buffer using `Buffer.from`
	    Buffer.from(masterpw)
    );

    console.log("encypted data: ", encryptedMasterpw.toString("base64"))

    const decryptedMasterpw = crypto.privateDecrypt(
        {
            key: privateKey,
            // In order to decrypt the data, we need to specify the
            // same hashing function and padding scheme that we used to
            // encrypt the data in the previous step
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
            passphrase: 'top secret'
        },
        encryptedMasterpw
    );
    
    // The decrypted data is of the Buffer type, which we can convert to a
    // string to reveal the original data
    console.log("decrypted data: ", decryptedMasterpw.toString())
    
    res.redirect('/')
})

router.post('/home', (req, res) => {
    const username = req.body.username
    const masterpw = req.body.password

    res.send(`Welcome ${username}! Your master password is ${masterpw}.`)
})

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'register.html'))
})

module.exports = router;