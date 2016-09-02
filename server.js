var port = process.env.port || 1337;
var express = require('express');

var app = express();

app.use(express.static('dist'));

app.listen(port);

/*
var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.sendFile('dist/index.html');
}).listen(port);
*/