const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/p', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'interface.html'));
})