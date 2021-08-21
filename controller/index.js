const express = require('express')

const app = express()

const PORT = process.env.PORT || 5555

// router under /
app.use('/', require('./router'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});




