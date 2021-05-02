const express = require('express')
const router = express.Router()

const wifi = require('../../WIFI')

router.get('/:name', (req, res) => {
    const wifi_name = req.params.name
    const found = wifi.some(wifi => wifi.username === wifi_name)

    if(found){
        const pw_object = wifi.filter( wifi => wifi.username === wifi_name )[0]
        res.send(`Wifi password for ${pw_object.username}: ${pw_object.password}` )
    }else{
        res.status(400).json({ msg: `No wifi with the name of ${wifi_name}`})
    }

    // 
})
    
router.get('/', (req, res) => {
    res.json(wifi)
})

module.exports = router;