const express = require('express');
const bodyParser = require('body-parser');
//const axios = require('axios');

require('dotenv').config();

var app = express();

const port = process.env.PORT || 3000;

const { respondTest, obligatoryPrequelMeme } = require('./routes/basic/testRoute.js');

app.use(bodyParser.json()); //Pra receber o formato application/json
app.use(
    bodyParser.urlencoded(
        {
            extended: true
        }
    )
); //Pra receber o formato application/x-www-form-urlencoded

app.post("/new-message", function(req, res){
    respondTest(req, res);
});

app.post("/angry-robot-archives", function(req, res){
    obligatoryPrequelMeme(req, res);
});

//Starta o servidor
app.listen(port, function(){
    console.log("Telegram Bot Listening at port ", port);
});
