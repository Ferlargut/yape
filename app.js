var express = require('express');
var app = express();

app.use('/', express.static('public'));


app.listen(1388, function () {
    console.log("logrado");
});