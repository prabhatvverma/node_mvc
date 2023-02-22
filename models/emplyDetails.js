const mongoose = require("mongoose");
const employee = mysql.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})