module.exports.home = function(req,res){
    return res.render('home', {
        title:"ToDoList By Vaibhav"
    });
}
