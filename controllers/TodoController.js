var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const todo = require('../models/to-do-list-schema');


var urlEncodedParser = bodyParser.urlencoded({extended: false});


//var item = todo({id:1,taskName:"code",description:"code the node", isCompleted: false}).save();

module.exports = function(app){

    app.get('/todo', function(request, response){
        console.log("get-list");
        var donedata=[];
        var notdonedata=[];
        todo.find({}, function(err, data){
            console.log(data);
            if(err) throw err;
            data.forEach(function(item){
                if(item.isCompleted){
                    donedata.push(item);
                }else{
                    notdonedata.push(item);
                }
            });
            response.render('todo', {notdonedata : notdonedata, donedata: donedata});
        });
    });

    app.post('/todo', urlEncodedParser, function(request, response){
        console.log(request.body);
        var todonew = todo(request.body).save(function(err, data){
            if(err) throw err;
            console.log('save completed');
            response.json(data);
        });
    });

    app.post('/todo/doneTask', urlEncodedParser, function(request,response){
        console.log(request.body);
        todo.updateOne({taskName: request.body.taskName},{$set:{isCompleted:true}},{$set:{completedAt: mongoose.now}}, function(err, data){
            if(err) err;
            console.log('update completed');
            response.json(data);
        });
    });

    app.post('/todo/deleteTask', urlEncodedParser, function(request,response){
        console.log(request.body.taskName);
        todo.find({taskName: request.body.taskName}).remove(function(err,data){
            if(err) throw err;
            console.log('remove completed');
            response.json(data);
        });
    
    });
}