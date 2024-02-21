#! /opt/homebrew/bin/node
const http = require('http')
const args = process.argv;
const getConfig = require('../config');


const config = getConfig(args);
const hostname = config.hostname;
const port = config.port;

const server = http.createServer((req, res) => {
    if(req.url && req.url.endsWith('/home')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to home!');
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        const jsonData = {host: hostname, port: port};
        res.end(JSON.stringify(jsonData));
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})