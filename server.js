var port = process.env.port || 80;

var express = require('express');
var path = require('path');
var open  = require('open');

var app = express();

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});



