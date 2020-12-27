const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(app){

    app.post('/signup', function(request,response){
        console.log('post signup called');
    });
}