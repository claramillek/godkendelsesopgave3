const interest = require("./hardCodeInterest");
function interestController(req, res) {
    res.end(JSON.stringify(interest)) //for at serveren kan udprinte interest laves det til en string, via. JSON methoden stringify
};

module.exports=interestController;