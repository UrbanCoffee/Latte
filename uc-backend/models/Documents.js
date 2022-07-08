const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = new Schema ({
    docID: {
        type: Number,
    },
    title: {
        type: String
    }
});

module.exports = mongoose.model('Documents', DocumentSchema)