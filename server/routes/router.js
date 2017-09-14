var express =require("express");
var router =express.Router()

var insertData =require('../modules/insert.js')
var getSeries = require('../modules/async.js');
var getParallel= require('../modules/asnc.js');


router.post("/test",function(req,res){
	 console.log(req.body);
	insertData(req.body,function(response){
	 	res.json(response);
	 })
});

router.get('/allseries', function(req, res) {
	getSeries(function(result) {
		res.json(result);
	});
});

router.get('/allparallel', function(req, res) {
	getParallel(function(result) {
		res.json(result);
	});
});
module.exports=router;