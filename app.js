var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'public/img')));
app.use('/static', express.static(path.join(__dirname,'public/assets')));
app.use('/', express.static('public'));


app.listen(1388, function () {
    console.log("logrado");
});