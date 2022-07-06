const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DocumentSchema = new Schema ({
    _id: new Schema.Types.ObjectId,
    docId: {
        type: number
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    author: [{
        usrname: string
    },
    {
        usrId: number
    }],
    body: {
        type: array
    },
    timeStamp: {
        type: Date
    }
}, {
    collection: 'Documents'
});