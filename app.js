var express = require('express');
const mongoose = require('mongoose');
const HomeController = require('./controllers/HomeController');
const TodoController = require('./controllers/TodoController');
const authController = require('./controllers/authController');
require('dotenv').config({path: __dirname + '/.env'});

//declaring cofiguration variables
var app = express();

var dbConnectionString = process.env.MONGODB_URL;
mongoose.connect(dbConnectionString, { useNewUrlParser : true, useUnifiedTopology:true, useCreateIndex:true })
.then((val) => {
    //starting port
    var port_number = app.listen(process.env.PORT || 3000);
    app.listen(port_number);
    console.log("Server is listnining at : "+port_number);
}).catch((err) => console.log(err));
console.log('Connected with database');


//middleware
app.set('view engine', 'ejs');
app.use(express.static('./public'));
//app.use(express.json);

//rendering controllers
HomeController(app);
TodoController(app);
authController(app);

