const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objectId = mongoose.Schema.Types.ObjectId;

const articleSchema = new Schema({
    _id: {type: objectId, auto: true},
    itemgroup: {type: String, required: true},
    artworkimage: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String},
    references: {type: String},
    images: {type: String},
    hierarchynumber: {type: Number},
    tier: {type: Number},
    category: {type: String},
    parent: {type: String},
    itemtype: {type: String},
    planet: {type: String},
    continent: {type: String},
    countryorterritory: {type: String},
    state: {type: String},
    county: {type: String},
    city: {type: String},
    borough: {type: String},
    neighborhood: {type: String},
    street: {type: String},
    building: {type: String},
    unit: {type: String},
    room: {type: String},
    itembeing: {type: String},
    nature: {type: String},
    landmark: {type: String},
    transport: {type: String},
    heirarchynumber2: {type: Number},

}, {
    versionKey: false
});


const article = mongoose.model('articles', articleSchema);

module.exports = article;