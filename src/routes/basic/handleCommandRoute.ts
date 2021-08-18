//const axios = require('axios');
import { Telegraf, Context } from 'telegraf';
import { serviceRedirect } from '../service/mainServiceRoute';
import { downloadVideo } from '../utils/youtubeDl';

const commandsHandler = function(bot: Telegraf){
    /*Test command*/
    bot.command('testcommand', ctx => {
        ctx.reply('command received');
    });

    bot.command('newOrder', ctx => {
        ctx.reply('Probably bad');
        serviceRedirect(bot);
    });

    bot.command('downloadYoutube', ctx => {
        ctx.reply('Baixando vídeo. \nPor favor aguarde, este processo pode levar algum tempo dependendo da velocidade da conexão e tamanho do vídeo.');
        downloadVideo(ctx);
        //ctx.reply(`This feature is not finished. URL: ${ctx.message.text.split(" ")[1]}`);
    });
}

export {
    commandsHandler
}
