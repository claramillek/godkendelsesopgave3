const image = require('../model/image')

let imageArray = []
let image1 = new image('user1.png', '08/10/2020', '345x345');
let image2 = new image('img134.png', '15/10/2020', '296x411');
let image3 = new image('imageForApp.png', '02/10/2020', '754X770');
let image4 = new image('image66.png', '09/09/2020', 'fullsize');

imageArray=[image1,image2,image3,image4];

module.exports = imageArray