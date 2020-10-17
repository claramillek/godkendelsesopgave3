const matchArray = require('./hardCodeMatch');

function matchController(req,res) {
    res.end(JSON.stringify(matchArray))
};

module.exports=matchController;