var studentColl= require('../models/sample-schema.js').students;
function insertData(a,callback){
	var	retObj={};
	studentColl.create(a,function(err,docs){
		if(err){
			retObj.status=false;
			retObj.message="Error while inserting";
			console.log(err);
			callback(retObj);
		}
		else{
			retObj.status=true;
			retObj.message="Inserted";
			callback(retObj);
		}
	});	
}

module.exports = insertData;