//const axios = require('axios');
import { Telegraf, Context } from 'telegraf';


const messagesHandler = function(bot: Telegraf){
    bot.on('text', ctx => {
        //console.log(ctx.message.text); //debug

        /*Reposta de testes, vai ser excluída no futuro*/
        if(ctx.message.text.toLowerCase().includes('test')){
            ctx.reply("tested");
        }
        /*Resposta de memes ruins das prequels de Star Wars, obrigatório ter pelo menos uma*/
        else if(ctx.message.text.toLowerCase().includes('hello there')){
            ctx.reply("*muffled voice* \nGENERAL KENOBI!");
        }
        /*Resposta de conspiração*/
        else if(ctx.message.text.includes("9/11") || ctx.message.text.toLowerCase().includes("11 de setembro")){
            //ctx.reply("unfinished functionality");
            ctx.replyWithPhoto({ source: __dirname + '/../../../assets/images/bush.jpeg' });
        }
    });
}

export {
    messagesHandler
}
