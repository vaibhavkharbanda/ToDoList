const express=require('express');
const app=express();
const port= 8000;


app.listen(port, function(err){
    if(err){
        console.log(`Error in running server on port:${port} and error is :${err}`);
    }

    console.log(`server is running on port : ${port}`);
});