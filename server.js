var express = require('express'),
path = require('path'),
app = express(),
port = process.env.PORT || 1337;

app.use(express.static(__dirname));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '/index.html'));
});
app.listen(port);