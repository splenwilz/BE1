const mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    _id: {type: objectId, auto: true},
    email: {type: String, required: true, min:4, unique: true},
    password: {type: String, required: true},
}, {
    versionKey: false
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

const user = mongoose.model('users', userSchema);

module.exports = user;



// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

// // Define your schema as normal.
// var userSchema = mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     email: { type: String, index: true, unique: true, required: true },
//     password: { type: String, required: true }
// });

// // Apply the uniqueValidator plugin to userSchema.
// userSchema.plugin(uniqueValidator);