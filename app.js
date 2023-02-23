// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/company");

// const mysql =require('mysql');

// const connection = mysql.createConnection({
//     host : 'localhost',
//     database: 'employees',
//     user: 'root',
//     password: 'nayan@'

// });

// connection.connect(function(error){
//     if(error)
//     {
//         throw error;
//     }
//     else{
//         console.log('MYSQL Databse is connected successfully');
//     }
// });

// module.exports=connection;


const express = require("express");
const app = express();

const path = require("path");

console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'pug');
// app.use(express.static(path.join(__dirname, 'views')));
app.set('views','./views/users');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/create', function (req, res,next) {
    res.render("create");
})

app.get('/index', function(req,res,next){
res.render("index");
});
app.get('/employedata', function(req,res,next){
    res.render("employedata");
    });
module.exports = app;

app.listen(3000, function () {
    console.log("server is running ....");
})
