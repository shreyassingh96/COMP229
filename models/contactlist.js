/*
File Name - contact_list.js
Student Name - Shreyas Singh
Student ID - 301239523
*/
let mongoose = require('mongoose');

//create a model class

let contactlistModel = mongoose.Schema(
    {
        name :{
            type : String,
            require : true
        },
        number : {
            type : Number,
            require : true
        },
        email : {
            type : String,
            require : true
        }  
    
    },
    {
        collection: "contactlist" 
    }
);

module.exports = mongoose.model('contactlist',contactlistModel);