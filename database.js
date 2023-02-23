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