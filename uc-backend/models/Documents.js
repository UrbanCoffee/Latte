const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = new Schema ({
    docID: {
        type: Number
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    author: {
        type: String
    },
    authorID: {
        type: Number
    },
    body: {
        type: Array
    },
    timePosted: {
        type: Date
    }
});

module.exports = mongoose.model('Documents', DocumentSchema)