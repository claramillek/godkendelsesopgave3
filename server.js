// denne angiver porten, og hvilke routes/ endpoints der findes dertil
const express= require ("express");
const server=express();
const port= process.env.port || 3000;


// mine GET requests: 
const users = require("./controller/");
server.use("./model/user", users)

const interest= require("./controller/interestController.js");
app.use("/interests", interest)

const match= require("./controller/matchController.js");
app.use("/matches", match)


//server aktiveres
app.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});


