const ToDoDb = require("../models/ToDoDB");

module.exports.home = function (req, res) {

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

    let id = req.query.id;
    //find the task in the DB and del. it
    console.log('enter into del js')
    ToDoDb.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log("Eroor in del. an object from database");
            return;
        }
        return res.redirect('back');
    });
}


