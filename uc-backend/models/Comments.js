const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    comID: {
        type: Number
    },
    parentID: {
        type: Number
    },
    authorID: {
        type: Number
    },
    isReply: {
        type: Boolean
    },
    text: {
        type: String
    }
});

module.export = mongoose.model('Comments', CommentSchema);