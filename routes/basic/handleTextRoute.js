const axios = require('axios');


const textHandler = function(req, res){
    const { message } = req.body;

    var responseText = '';

    if(message.text.toLowerCase().indexOf('test') > 0){
        responseText = 'tested';
    }
    else if(message.text.toLowerCase().indexOf("hello there") > 0){
        responseText = "*muffled voice* \nGENERAL KENOBI!";
    }

    axios.post(
        process.env.BOT_URL + '/new-message',
        {
            chat_id: message.chat.id,
            text: responseText
        }
    ).then(response => {
        console.log('Resposta enviada');
        res.end('ok');
    }).catch(err => {
        console.log('Erro: ', err);
        res.end('Erro');
    });
}


module.exports.textHandler = textHandler;
