var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HomeController = require('./controllers/HomeController');
const TodoController = require('./controllers/TodoController');

//declaring cofiguration variables
var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

var dbConnectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.8zzqt.mongodb.net/to-do-application?retryWrites=true&w=majority'
mongoose.connect(dbConnectionString, { useNewUrlParser : true, useUnifiedTopology:true });
console.log('Connected with database');

//starting port
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
console.log("Server is listnining at : "+port_number);


app.set('view engine', 'ejs');
app.use(express.static('./public'));

//rendering controllers
HomeController(app);
TodoController(app);

