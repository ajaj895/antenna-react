// This is the routes.js file using nodejs.
// Needed for server stuff.

const express = require('express');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const connection = mariadb.createPool({
    host    : 'localhost',
    user    : 'root',
    password: 'pearl1941',
    database: 'radio'
});

// Starting the node js stuff
const app = express();

app.get('/users', function (req, res){
    connection.getConnection(function (err, connection){
        connection.query('SELECT * FROM am_radio WHERE am_callsign LIKE \'CHLO%\'', function(error, results, fields){
            if(error) throw error;

            res.send(results)
        });
    });
});

app.listen(3000, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
});