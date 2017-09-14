var async= require('async');


var studentColl= require('../models/sample-schema.js').students;
var teacherColl= require('../models/sample-schema.js').teachers;

function getSeries(callback){
	var retObj = {};
	async.series({
	    students: function(aCbOne){
	        studentColl.find({},function(err,studentDocs){
	            aCbOne(null, studentDocs)
	        });
	    },
	    teachers: function(aCbTwo){
	        teacherColl.find({},function(err,teacherDocs){
	            aCbTwo(null,teacherDocs)
	        });
	    }
	},
	function(err, results){
		if(err) {
			retObj.status = false;
			retObj.message = 'Error';
			callback(retObj);
		} else {
			retObj.message = 'Success';
			retObj.output = results.students.concat(results.teachers);
			retObj.status = true;
			callback(retObj);
		}
	});
}

module.exports = getSeries;



