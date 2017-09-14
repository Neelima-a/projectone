var express =require("express");
var app =express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// var studentColl= require('./schema.js');
var router = require('./server/routes/router.js');
app.use('/api',router); 

app.listen(4040);


