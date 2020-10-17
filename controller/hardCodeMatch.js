const match= require("../model/match");

let matchArray = [] 
let match1 = new match("user 1 matches with user 2");
let match2 = new match("user 2 matches with user 1");
let match3 = new match("user 3 matches with user 4");
let match4 = new match("user 3 matches with user 4");


matchArray=[match1, match2, match3, match4, match5];

module.exports = matchArray