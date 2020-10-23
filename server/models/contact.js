let mongoose = require('mongoose');

// create a model class
// let bookModel = mongoose.Schema({
//     name: String,
//     author: String,
//     published: String,
//     description: String,
//     price: Number
// },
let contactModel = mongoose.Schema({
    username: String,
    contactnumber: String,
    email: String,
    homeaddress: String,
    password: String
},
{
    // collection: "books"
    collection: "users"

});

// module.exports = mongoose.model('Book', bookModel);
module.exports = mongoose.model('Contact', contactModel);