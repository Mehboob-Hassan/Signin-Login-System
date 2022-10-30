const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    gender : String,
    phone : Number,
    age :  Number,
    password : Number,
    cpassword : Number
})

const Employee = new mongoose.model('Employee', employeeSchema)

module.exports = Employee;