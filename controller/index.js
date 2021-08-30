const express = require('express')
const cors = require('cors')
const app = express()
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 5555

app.use(cors())
app.use(express.json())

app.use('/', require('./router'))

const dbo = require("./db/conn");

app.listen(PORT, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err);
    });
    console.log(`Server started on port ${PORT}`);
});




