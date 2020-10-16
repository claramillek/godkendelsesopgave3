class user {
    constructor(firstName, lastName, age, gender, interests){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

};
module.exports = user

class paymentUser extends user {
    constructor(firstName,lastName,age,gender,interests,creditCard){
        super (firstName,lastName,age,gender,interests)
        this.creditCard=creditCard
    }

};

module.exports = paymentUser

class freeUser extends user{
    constructor(firstName,lastName,age,gender,interests){
        super(firstName,lastName,age,gender,interests)
    }   
};

module.exports = freeUser
