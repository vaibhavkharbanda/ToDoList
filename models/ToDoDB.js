const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:false
    },

    dueDate:{
        type:String,
        required:false

    }

});


const ToDoDb = mongoose.model('Tododb',TodoSchema);

module.exports = ToDoDb;