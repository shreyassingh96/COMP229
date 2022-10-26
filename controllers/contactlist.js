/*
File Name - contact_list.js
Student Name - Shreyas Singh
Student ID - 301239523
*/
const { mongo, Mongoose } = require('mongoose');
const contactlist = require('../models/contactlist');
const { db } = require('../models/contactlist');
let ContactList = require('../models/contactlist');

//contact list with sorting
exports.list = function(req, res, next){
    ContactList.find((err, contactlist_List)=>{
       
        if(err)
        {
            return console.error(err);
        }
        else
        {
           
    
            res.render(
                'contactlist/list', 
                { 
                    
                    title: 'Contact List',
                    ContactList :  contactlist_List.sort((a, b) => a.name.localeCompare(b.name)),
                    
                    userName: req.user ? req.user.username : '' 
                }
            );
        }
    });
}

//display page
exports.displayAddPage = (req, res, next) => {
    
    let newItem = ContactList();

    res.render('contactlist/add_edit', {
        title: 'Add New Contact',
        item: newItem,
        userName: req.user ? req.user.username : '' 
    })          
}

//process page
exports.processAddPage = (req, res, next) => {
    
    let newItem = ContactList({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        
    });

    ContactList.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/contactlist/list');
        }
    });
}

//edit
exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    ContactList.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contactlist/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : '' 
            })
        }
    });
}

//edit process page
exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    
    let updatedItem = ContactList({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        
    });

    

    ContactList.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {

            res.redirect('/contactlist/list');
        }
    });
}

// for delete
exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    ContactList.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/contactlist/list');
        }
    });
}

