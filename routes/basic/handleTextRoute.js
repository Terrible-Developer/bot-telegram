const axios = require('axios');


const textHandler = function(messageObj){

    var responseText = '';

    if(messageObj.text.toLowerCase().indexOf('test') > 0){
        responseText = 'tested';
    }
    else if(messageObj.text.toLowerCase().indexOf("hello there") > 0){
        responseText = "*muffled voice* \nGENERAL KENOBI!";
    }

    axios.post(
        process.env.BOT_URL + '/new-message',
        {
            chat_id: messageObj.chat.id,
            text: responseText
        }
    ).then(response => {
        console.log('Resposta enviada');
    }).catch(err => {
        console.log('Erro: ', err);
    });
}


module.exports.textHandler = textHandler;
