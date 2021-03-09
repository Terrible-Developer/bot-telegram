const axios = require('axios');

const { textHandler } = require('./routes/basic/handleTextRoute.js');

const respondMessage = function(req, res){
    const { message } = req.body;

    if(!message){
        return res.end();
    }

    if(message.text !== null && message.text !== undefined){
        textHandler(message);
    }
}

const respondTest = function(req, res){
    const { message } = req.body;

    //message tem "text" e "chat". "chat" tem a propriedade id, que é a id do chat atual

    //Termina a execução e não responde se a mensagem for nula ou se não possuir a palavra "test"
    if(!message || message.text.toLowerCase().indexOf('test') < 0){
        return res.end();
    }

    //Envia a requisição pra api do telegram
    axios.post(
        process.env.BOT_URL + "/sendMessage",
        {
            chat_id: message.chat.id,
            text: 'tested'
        }
    ).then(response => {
        //acontece em caso de sucesso, a mensagem foi enviada
        console.log("Post OK");
        res.end("ok");
    }).catch(err => {
        //em caso de erro, a mensagem não foi enviada
        console.log("Erro: ", err);
        res.end("Erro: ", err);
    });
}

const obligatoryPrequelMeme = function(req, res){
    const { message } = req.body;

    if(!message || message.text.toLowerCase() !== 'hello there'){
        return res.end();
    }

    axios.post(
        process.env.BOT_URL + "/sendMessage",
        {
            chat_id: message.chat.id,
            text: "*muffled voice* \nGENERAL KENOBI!"
        }
    ).then(response => {
        console.log("Another happy landing");
        res.end("ok");
    }).catch(err => {
        console.log("Impossible. Perhaps the archives are incomplete. \nError: ", err);
        res.end("*angery grievous noises*");
    });
}

module.exports.respondMessage = respondMessage;
module.exports.obligatoryPrequelMeme = obligatoryPrequelMeme;
