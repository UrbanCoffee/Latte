const coms = require('../models/Comments');

function getComment(req, res) {
    res.send({text: "Response"});
}

module.exports = {
    getComment
}