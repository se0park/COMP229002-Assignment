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
    /*password:
    {
        type: String,
        default:'',
        trim: ture,
        require: 'password is required'
    }
    */
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