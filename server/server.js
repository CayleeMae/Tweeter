const express = require('express');
const app = express();
const port = process.env.PORT || 3001;                //grabbing a port from the enviornment(dynamic port) OR define the port number (static port) 
                                                      //PORT is an enviornment varible, the naming convention is to use ALL CAPS
const feeds = require('./routes/feed');
const messages = require('./routes/messages');

const start = async () => {

    app.use(express.json());
    //.use is middleware for express, 
    //every response will be retured as an JSON object
    app.use("/api/feeds", feeds);
    app.use("/api/messages", messages); //url must match the endpoint in the service

    app.listen(port, () => {
        console.log('📦 Server started on port', port)
    });
};

// 


start();
