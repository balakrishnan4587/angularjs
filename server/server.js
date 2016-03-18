var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../src')));

app.get('/', function(req, res){
 res.sendFile(path.join(__dirname, '../src', 'index.html'));
});

app.listen(8000);