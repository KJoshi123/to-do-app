var express = require('express');
var bodyParser = require('body-parser');
const HomeController = require('./controllers/HomeController');
const TodoController = require('./controllers/TodoController');

//declaring cofiguration variables
var app = express();
var urlEncodedParser = bodyParser.urlencoded({extended: false});

//starting port
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
console.log("Server is listnining at : "+port_number);


app.set('view engine', 'ejs');
app.use(express.static('./public'));

//rendering controllers
HomeController(app);
TodoController(app);

