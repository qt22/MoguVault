const express = require('express')
const path = require('path');
const wifi_data = require('./WIFI');

const app = express()

const PORT = process.env.PORT || 5555

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')))

app.use('/wifipw', require('./routes/api/wifipw'))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/p', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'interface.html'));
// })