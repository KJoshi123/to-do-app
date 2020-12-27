const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:[true, 'Please enter email address'],
        unique:true,
        validate:[isEmail, 'please enter valid email']
    },
    password:{
        type:String,
        minlength:[8, 'minimum length of password must be 8 char'],
        maxlength:[15, 'maximum length of password allowed is 15 char'],
        required:[true, 'please enter password']
    }
});

UserSchema.pre('save', async function(next){
    console.log(this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('user', UserSchema);

module.exports = User;