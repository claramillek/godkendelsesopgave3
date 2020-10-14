//herinde skal jeg lave de forskellige endpoints//
class controller {
    getUser(id){ //endpointets kald
        var user = db.getUser(id); //db.getUser snakker med
        return user;
    }

};

class db {
    getUser(id){
        var user = {
            name: "john",
            country: "Denmark"
        };
        return user;
    }
}

/*Opgavens henblik er, at i får lavet et API som kan modtage og sende lidt data. 
Den bagvedliggende struktur skal være klasser, men hvad der 
helt præcist er i klasserne spiller ikke den helt store rolle i denne opgave. 
Det har vi arbejdet med tidligere - hvorfor fokus er på API, nedarvning og opbygning af noget, 
som I kan bruge til jeres eksamensopgave.*/

//når der skal uploades til databasen vil man eksemplvis bruge mongo//