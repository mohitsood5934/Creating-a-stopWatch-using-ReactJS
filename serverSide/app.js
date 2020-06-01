var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var cors = require("cors");
var morgan = require("morgan");

//import custom modules
var route = require("./routes/stopWatchRoutes");
var config = require("./config/config")
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'stopWatchLogFile.log'), { flags: 'a' })

//create a new express application
var app = express();

// connecting to mongodb 
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(config.getDBString(),{ useNewUrlParser: true ,useUnifiedTopology:true})
.then(() => console.log('Connected to MongoDB!!'))
.catch((err) => console.log(err));

//middlewares used
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combined', { stream: accessLogStream }))

//configure routes 
app.use(config.API_PATH,route);


//start the server 
app.listen(config.PORT,function(req,res){
    console.log("You are listening to port",config.PORT)
})