var express = require('express'),
app = express(),
port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/dist'));
app.listen(port);