// le schema utilisé par chaque route

//require mongoose
const mongoose = require('mongoose')

// create schema
const Schema =mongoose.Schema

const contactSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    phone: Number,
    favoritefood:{
       type: String,
    }
    
})

module.exports= Contact = mongoose.model('Contact', contactSchema)