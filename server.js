// denne angiver porten, og hvilke routes/ endpoints der findes dertil
const express= require ("express");
const server=express();
const port= process.env.port || 3004;

// mine GET requests: 
const userArray = require('./controller/userController');
server.use('./model/user', userArray)

const interestsArray = require('./controller/interestsController');
server.use('./model/interests', interestsArray)

const matchArray = require('./controller/matchController');
server.use('./model/matches', matchArray)


//server aktiveres
server.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});


