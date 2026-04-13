const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/notes') {
        res.end(`path name is ${req.url}`);
    } else if (req.url === '/book') {

    }
});

server.listen(8080, () => {
    console.log('server is live');
});