const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:"./config.env"})
const port = process.env.PORT || 5000;


//middle ware
app.use(cors());
app.use(express.json());

//mongo conn
const con = require('./db/connection.js');
const { error } = require('console');

//routes
app.use(require('./routes/route'))

con.then(db => {
    if(!db) return process.exit(1);
    
    //server
    app.listen(port, () => {
        console.log(`Server is running on: http://localhost:${port}`);
    }) 


    app.on('error', err => console.log(`Failed To Connect with HTTP Server: ${err}`));

}).catch(error => {
    console.log(`Connection Failed..!!${error}`); //DB
})
