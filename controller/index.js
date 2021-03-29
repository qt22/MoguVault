const http = require('http');

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello sexyrexy 7567</h1>");
    res.end();
});

server.listen(7567, () => {
    console.log("Welcomme, sexyrexy7567");
});