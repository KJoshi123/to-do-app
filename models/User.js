const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:8,
        maxlength:15,
        required:true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;