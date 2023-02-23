// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/company");

const mysql =require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database: 'employees',
    user: 'root',
    password: 'nayan@'

});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else{
        console.log('MYSQL Databse is connected successfully');
    }
});

module.exports=connection;


const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/register', function (req, res) {
    res.render("register");
})

// app.get('./login', function(req,res){
// res.render("login");
// });

app.listen(3000, function () {
    console.log("server is running ....");
})