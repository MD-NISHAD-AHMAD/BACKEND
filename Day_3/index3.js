const fs = require('fs');
 
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/notes' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1><i><b>Hello Data</b></i></h1>')
    } else {
        res.end('not found');
    }
});

server.listen(7000, () => {
    console.log('server_2 in index3 file port 7000 is running');
});