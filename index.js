const express = require('express');
const bodyParser = require('body-parser');
//const axios = require('axios');

require('dotenv').config();

var app = express();

const port = process.env.PORT || 3000;

const { respondTest } = require('./routes/basic/testRoute.js');

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
   // const { message } = req.body;

   // //message tem "text" e "chat". "chat" tem a propriedade id, que é a id do chat atual

   // //Termina a execução e não responde se a mensagem for nula ou se não possuir a palavra "test"
   // if(!message || message.text.toLowerCase().indexOf('test') < 0){
   //     return res.end();
   // }

   // //Envia a requisição pra api do telegram
   // axios.post(
   //     process.env.BOT_URL + "/sendMessage",
   //     {
   //         chat_id: message.chat.id,
   //         text: 'tested'
   //     }
   // ).then(response => {
   //     //acontece em caso de sucesso, a mensagem foi enviada
   //     console.log("Post OK");
   //     res.end("ok");
   // }).catch(err => {
   //     //em caso de erro, a mensagem não foi enviada
   //     console.log("Erro: ", err);
   //     res.end("Erro: ", err);
   // });
});

//Starta o servidor
app.listen(port, function(){
    console.log("Telegram Bot Listening at port ", port);
});
