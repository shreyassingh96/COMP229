/*
File Name - db.js
Student Name - Shreyas Singh
Student ID - 301239523
*/


let DB_CONNECTION = "mongodb+srv://admin:admin@cluster1.os0aaex.mongodb.net/?retryWrites=true&w=majority"

//database setup
let mongoose = require('mongoose');



module.exports = function(){
    
    //connect to DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console,'connection error :  '));
    mongoDB.once('open',()=>{
        console.log('conected to MongoDB...');
    }) 

    return mongoDB;
}

