class user {
    constructor(firstName, lastName, age, gender, interests){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

};

class paymentUser extends user {
    constructor(firstName,lastName,age,gender,interests,creditCard){
        super (firstName,lastName,age,gender,interests)
        this.creditCard=creditCard
    }

};

class freeUser extends user{
    constructor(firstName,lastName,age,gender,interests){
        super(firstName,lastName,age,gender,interests)
    }   
};

class image{
    constructor(img,fileName,uploadTime){
        img=img.source //upload billede
        fileName=fileName
        uploadTime=uploadTime
    }
}

