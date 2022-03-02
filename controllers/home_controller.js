var ToDoDb = require("../models/ToDoDB");

module.exports.home = function (req, res) {
    //fetching data from DB

    ToDoDb.find({}, function (err, allData) {
        if (err) {
            console.log('Error in fetching data');
            return;
        }
        return res.render('home', {
            title: "ToDoList By Vaibhav",
            todo_data: allData
        });
    });


}


module.exports.del_task = function (req, res) {
    //deleting data from DB
    var id = req.query;
    // number of tasks
    let count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        // find and delete
        ToDoDb.findByIdAndDelete(Object.keys(id)[i], function (err) {
            if (err) {
                console.log("unable delete task");
            }
        })
    }
    return res.redirect("back");
}


// module.exports.create_task = function(req,res){
//     ToDoDb.create({
//         task: req.body.addToDo,
//         category: req.body.taskCategory,
//         dueDate: req.body.dueDate 
//     }, function (err, newTask) {
//         if (err) {
//             console.log('error in creating task',err);
//             return;
//         }
//         console.log('*******',newTask);
//         return res.redirect('back');
//     });
// }