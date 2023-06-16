const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },

    position:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true, 
    }
    
})

const employeeModel = mongoose.model('employee', employeeSchema)
module.exports =employeeModel