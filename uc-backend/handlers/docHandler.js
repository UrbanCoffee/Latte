const docs = require('../models/Documents');

function getDocument(req, res) {
    docs.find({ docId: req.params.docId })
        .then(item => {
            if(item.length == 0)
                throw `Document (docId: ${req.params.docId}) not found.`;
            console.log(item);
            res.send(item);
        })
        .catch(err => {
            //console.log(err);
            res.sendStatus(404);
        });
}

module.exports = {
    getDocument
};