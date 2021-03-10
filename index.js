const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

var app = express();

const port = process.env.PORT || 3000;

const { respondMessage, respondTest } = require('./routes/basic/mainRoute.js');

app.use(bodyParser.json()); //Pra receber o formato application/json
app.use(
    bodyParser.urlencoded(
        {
            extended: true
        }
    )
); //Pra reconhecer o formato application/x-www-form-urlencoded

app.post("/new-message", function(req, res){
    //respondMessage(req, res);
    respondTest(req, res);
});

//Starta o servidor
app.listen(port, function(){
    console.log("Telegram Bot Listening at port ", port);
});
