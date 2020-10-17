const interests = require("../model/interests")

let interestsArray = [];
let interests1 = new interests (['soccer', 'cooking', 'reading'], 'heterosexual');
let interests2 = new interests (['knitting', 'baking', 'running', 'yoga'], 'heterosexual');
let interests3 = new interests (['reading','mountainbiking'], 'homosexual');
let interests4 = new interests (['drinking wine', 'painting', 'artmuseums'], 'homosexual');

interestsArray = [interests1,interests2,interests3, interests4];

module.exports = interestsArray;