const mongoose = require("mongoose");
const employee = mysql.Schema({

    employee_id:{
        type:String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no :{
        type:Number,
        required: true
    },

});

const Employee = mongoose.model("Employee", "employee");
module.exports= Employee;