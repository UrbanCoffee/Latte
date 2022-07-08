const docs = require('../models/Documents');

function getDocument(req, res) {
    docs.findOne({ docID: req.params.docID })
        .then(item => {
            if(item.length == 0)
                throw `Document (docId: ${req.params.docID}) not found.`;
            console.log(item);
            res.send(item);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        });
}

module.exports = {
    getDocument
};