//kalder min userclass fra user.js dokumentet//
const user = require("./user");

class paymentUser extends user {
    constructor(firstName,lastName,age,gender,interests, image, password,match, creditcardNumber,creditcardExpDate,creditcardCVC){
        super (firstName,lastName,age,gender,interests, image, password, match)
        this.creditcardNumber = creditcardNumber
        this.creditcardExpDate = creditcardExpDate
        this.creditcardCVC = creditcardCVC
    }

};

//eksporterer paymentUser//
module.exports = paymentUser;
