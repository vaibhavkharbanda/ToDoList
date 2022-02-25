const ToDoDb = require("../models/ToDoDB");

module.exports.home = function(req,res){

ToDoDb.find({},function(err,allData){
    if(err){
        console.log('Error in fetching data');
        return;
    }
    return res.render('home', {
        title:"ToDoList By Vaibhav",
        todo_data:allData
    });
});

    
}


