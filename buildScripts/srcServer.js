var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.use(express.static('data'));
app.use(express.static('css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/tabulator.html'));
})

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})