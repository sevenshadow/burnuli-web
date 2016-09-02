var port = process.env.port || 80;

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

var app = express();

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, 'dist/index.html'));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});



