/*import express from 'express';
import user from '../model/user';
const server = express();*/

const userArray = require('./hardCodeUser');

function userController(req,res) {
    res.end(JSON.stringify(userArray))
};

module.exports=userController;


// forskellige noter - påbegyndt alternativer:
/*userArray.get('/hardCodeUser', (req, res)); {
    res.status (200).send({
        succes: 'true',
        message: 'user information is ready',
    })
}*/

//Endpoint for user://
/*
getUser(user){ //endpointets kald
        var user = db.getUser(id); //db.getUser snakker med
        return user;
    }

};*/
