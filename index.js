const { response } = require('express');
const express = require('express');


const port = 8000;
const app = express();
const db = require('./config/mongoose');
const ToDoDb = require('./models/ToDoDB');



//use express routes
app.use('/', require('./routes'));
app.use(express.urlencoded());
app.use(express.static('assets'));



//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server on port:${port} and error is :${err}`);
    }

    console.log(`server is running on port : ${port}`);
});





app.post('/create-task',function(req,res){
    ToDoDb.create({
        task: req.body.addToDo,
        category: req.body.taskCategory,
        dueDate: req.body.dueDate 
    }, function (err, newTask) {
        if (err) {
            console.log('error in creating task',err);
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
    });
});

app.post('/del-task',function(req,res){
    let id=req.query.id;
    //find the task in the DB and del. it
    console.log('enter into del js')
    ToDoDb.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Eroor in del. an object from database");
            return;
        }
        return res.redirect('back');
    });
});
