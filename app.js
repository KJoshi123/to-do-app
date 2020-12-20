var express = require('express');
var bodyParser = require('body-parser');
const HomeController = require('./controllers/HomeController');
const TodoController = require('./controllers/TodoController');

//declaring cofiguration variables
var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

//starting port
app.listen(3000);
console.log("Server is listnining at : 3000");


app.set('view engine', 'ejs');
app.use(express.static('./public'));

//rendering controllers
HomeController(app);
TodoController(app);

