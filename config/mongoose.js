//require the liberary
const mongoose = require('mongoose');

//connect to the DB
mongoose.connect('mongodb://localhost/ToDoList_DB');

//acquire the connection to check the connection
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console,'error in connecting db'));

//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to DB');
});
