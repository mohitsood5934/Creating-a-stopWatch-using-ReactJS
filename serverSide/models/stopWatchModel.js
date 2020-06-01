var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
var timer = new mongoose.Schema({
   dateOfBirth:Date 
});
var stopWatch = mongoose.model('stopWatch',timer);
module.exports=stopWatch;