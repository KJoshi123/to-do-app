const mongoose = require('mongoose');
const User = require('../models/User');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const jwt = require('jsonwebtoken');

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

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
   return jwt.sign({ id }, 'my stupid secreat', {
        expiresIn: maxAge
   });
}
module.exports = function(app){

    app.post('/signup', urlEncodedParser, async function(request,response){
        console.log('post signup called');
        const { email, password } = request.body;
        console.log(email, password);
        try{
            const user = await User.create({email, password});
            const token = createToken(user._id);
            response.cookie('user', token, { httpOnly: true, maxAge: maxAge * 1000});
            response.status(200).json({ user : user._id });
        }
        catch(err){
            const error = errorHandler(err);
            //console.log(err, err.code);
            response.status(400).json({ error });
        }
        
    });

    app.post('/login', urlEncodedParser, function(request, response){
        console.log(request.url, "post login called");
    })
}