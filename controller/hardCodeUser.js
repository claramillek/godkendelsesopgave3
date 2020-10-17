const freeUser = require('../model/freeUser');
const paymentUser = require ('../model/paymentUser');
const imageArray = require('./hardCodeImg');
const interestsArray = require('./hardCodeInterests');
const matchArray = require('./hardCodeMatch');

let userArray=[]
let Peter = new freeUser ('Peter', 'Jakobsen', 27, 'male', interestsArray[0], imageArray[0], 'etPassword432', matchArray[0]);
let Nicole = new freeUser ('Nicole', 'Sørensen', 31, 'woman', interestsArray[1], imageArray[1], 'nicole31y', matchArray[1]);
let Steen = new paymentUser ('Steen', 'Nielsen', 53, 'male', interestsArray[2], imageArray[2], 'f%%ljh', matchArray[2],'3245 0987 7765 0954', '01/24', '487');
let Micheal = new paymentUser ('Micheal', 'Karlsson', 45, 'male', interestsArray[3], imageArray[3], 'mountainbike1234', matchArray[3],'7592 8462 9578 0430', '06/22', '022');
userArray = [Peter,Nicole,Steen,Micheal];

module.exports = userArray

console.log(userArray);