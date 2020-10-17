//kalder min userclass fra user.js dokumentet//

const user = require("./user");
class freeUser extends user{
    constructor(firstName,lastName,age,gender,interests, image, password, match){
        super (firstName,lastName,age,gender,interests, image, password, match)
    }   
};
//eksporterer freeUser//
module.exports = freeUser;