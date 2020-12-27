const mongoose = require('mongoose');

var todoListSchema = new mongoose.Schema({ 
    taskName:String, 
    description:String, 
    deadline:{type: Date },
    isCompleted:{type: Boolean, default: false},
    completedAt: {type: Date, default:null}
}); 

var todo = mongoose.model('todo', todoListSchema);

module.exports = todo;