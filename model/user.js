//opretter min userclass med relevante attributer tilhørende 'user'//
class user {
    constructor(firstName, lastName, age, gender, interests, image, password, match){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.image = image;
        this.password = password;
        this.match = match;
    }

};
//eksporterer user//
module.exports = user;






