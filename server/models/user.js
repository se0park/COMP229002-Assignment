// File name : user.js
// Stuent's Name : Seyeong Park
// Student ID : 301088175
// Date : October 23th 2020 

// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
( // collections
    {
        username: 
        {
            type: String,
            default:'',
            trim: true,
            require: 'username is required'
        },
        password:
        {
            type: String,
            default:'',
            trim: true,
            require: 'password is required'
        },
        email:
        {
            type: String,
            default:'',
            trim: true,
            require: 'email address is required'
        },
        displayName:
        {
            type: String,
            default:'',
            trim: true,
            require: 'Display Name is required'
        },
        homeaddress:
        {
            type: String,
            default:'',
            trim: true,
        },
        contactnumber:
        {
            type: String,
            default:'',
            trim: true,
            require: 'Contact number is required'
        },
        created:
        {
            type: Date,
            default:Date.now,
        },
        update:
        {
            type: Date,
            default:Date.now,
        }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);