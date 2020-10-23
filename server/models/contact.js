// File name : contact.js
// Stuent's Name : Seyeong Park
// Student ID : 301088175
// Date : October 23th 2020 

let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    username: String,
    contactnumber: String,
    email: String,
    homeaddress: String,
    password: String
},
{
    collection: "users"

});
module.exports = mongoose.model('Contact', contactModel);