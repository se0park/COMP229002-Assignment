// File name : contact.js
// Stuent's Name : Seyeong Park
// Student ID : 301088175
// Date : October 23th 2020 

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', 
            {title: 'Contacts', 
            ContactList: contactList, displayName: req.user ? req.user.displayName:''});      
        }
    }).sort({'username': 1});
}

//page we doing
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "username": req.body.username,
        "contactnumber": req.body.contactnumber,
        "email": req.body.email,
        "homeaddress": req.body.homeaddress,
        "password": req.body.password
    });

    Contact.create(newContact, (err, Contact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit
            , displayName: req.user ? req.user.displayName:''})
        }
    }).sort({'username': 1});
}

    module.exports.processEditPage = (req, res, next) => {
        let id = req.params.id
    
        let updatedContact = Contact({
            "_id": id,
            "username": req.body.username,
            "contactnumber": req.body.contactnumber,
            "email": req.body.email,
            "homeaddress": req.body.homeaddress,
            "password": req.body.password
        });
    
    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}
    module.exports.performDelete = (req, res, next) => {
        let id = req.params.id;
    
        Contact.remove({_id: id}, (err) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                 // refresh the contact list
                 res.redirect('/contact-list');
            }
        });
}