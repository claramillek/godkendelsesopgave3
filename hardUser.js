const user = require('./user')

let userArray = []
let user1 = new user ('Peter', 'Jakobsen', 27, 'male', ['soccer', 'cooking', 'reading']);
let user2 = new user ('Nicole', 'Sørensen', 31, 'woman', ['knitting', 'baking', 'running', 'yoga']);

userArray = [user1,user2];

module.exports = userArray
