var express = require('express');
const mongoose = require('mongoose');
const HomeController = require('./controllers/HomeController');
const TodoController = require('./controllers/TodoController');
const authController = require('./controllers/authController');

//declaring cofiguration variables
var app = express();

var dbConnectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.8zzqt.mongodb.net/to-do-application?retryWrites=true&w=majority'
mongoose.connect(dbConnectionString, { useNewUrlParser : true, useUnifiedTopology:true, useCreateIndex:true });
console.log('Connected with database');

//starting port
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
console.log("Server is listnining at : "+port_number);

//middleware
app.set('view engine', 'ejs');
app.use(express.static('./public'));
//app.use(express.json);

//rendering controllers
HomeController(app);
TodoController(app);
authController(app);

