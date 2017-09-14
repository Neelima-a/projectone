var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/test');
var Schema=mongoose.Schema;

var studentSchema= new Schema({
	name:String,
	age:Number,
	location:String
});

var teacherSchema= new Schema({
	name:String,
	age:Number,
	location:String
});

var studentColl = mongoose.model("students",studentSchema);
var teacherColl = mongoose.model("teachers",teacherSchema);

module.exports={
	students: studentColl,
	teachers: teacherColl

};



