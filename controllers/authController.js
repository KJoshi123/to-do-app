const mongoose = require('mongoose');
const User = require('../models/User');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

//errorHandler

const errorHandler = (err) =>{
    let error = { 'email': '', 'password': ''};
    //console.log(err);
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(eachError =>{
            error[eachError.properties.path] = eachError.properties.message;
        });
    }
    if(err.code === 11000){
        error.email = 'email already exits try different email'
    }
    console.log(error);
    return error;
}
module.exports = function(app){

    app.post('/signup', urlEncodedParser, async function(request,response){
        console.log('post signup called');
        const { email, password } = request.body;
        try{
            const user = await User.create({email, password});
            response.status(200).json(user);
        }
        catch(err){
            const error = errorHandler(err);
            console.log(err, err.code);
            response.status(400).json({ error });
        }
        
    });

    app.post('/login', urlEncodedParser, function(request, response){
        console.log(request.url, "post login called");
    })
}