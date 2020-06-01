var express = require("express");
var router = express.Router();
var stopWatchController = require("../controllers/stopWatchController");

router.post("/addLogs",function(req,res){
stopWatchController.addLogs(req,res)
})
module.exports=router