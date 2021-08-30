const express = require('express')
const router = express.Router()
const dbo = require('./db/conn.js')

const bodyParser = require('body-parser')
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
const uuid = require('uuid')

const version = '0.1.0'
const passphrase = 'sexyrexy7567'

router.use(bodyParser.urlencoded({ extended: true }));
    
// main page when user enters the website
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})

// after register
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
            passphrase: passphrase
        }
    })

    const encryptedMasterpw = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        // We convert the data string to a buffer using `Buffer.from`
	    Buffer.from(masterpw)
    );

    let db_connect = dbo.getDb("PasswordManager");
    const user =  {
        _id: uuid.v4(),
        username: username,
        publicKey: publicKey.toString(),
        privateKey: privateKey.toString(),
        masterPassword_encrypted: encryptedMasterpw.toString("base64"),
        timeStamp: new Date().toLocaleString(),
        version: version
    };
    db_connect.collection("Register").insertOne(user, function (err, res) {
        if (err) throw err;
    });

    // user['uuid'] = uuid.v4()
    // user['username'] = username
    // user['publicKey'] = publicKey.toString()
    // user['privateKey'] = privateKey.toString()
    // user['masterPassword-encrypted'] = encryptedMasterpw.toString("base64")
    // user['timeStamp'] = new Date().toLocaleString()
    // user['version'] = version

    // const userjsondata = JSON.stringify(user, null, 2)

    // fs.readFile('users.json', (err, data) => {
    //     if (err) throw err;

    //     var json = JSON.parse(data)
    //     json.push(userjsondata)

    //     fs.writeFile('users.json', JSON.stringify(json, null, 2), (err) => {
    //         if (err) throw err
    //     })
    // })

    /*
        SEPARATE
    */

    // const decryptedMasterpw = crypto.privateDecrypt(
    //     {
    //         key: privateKey,
    //         // In order to decrypt the data, we need to specify the
    //         // same hashing function and padding scheme that we used to
    //         // encrypt the data in the previous step
    //         padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    //         oaepHash: "sha256",
    //         passphrase: 'top secret'
    //     },
    //     encryptedMasterpw
    // );
    
    res.redirect('/')
})

// home page after logging in
router.post('/home', (req, res) => {
    const username = req.body.username
    const masterpw = req.body.password

    res.send(`Welcome ${username}! Your master password is ${masterpw}.`)
})

// register page
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'register.html'))
})

module.exports = router;