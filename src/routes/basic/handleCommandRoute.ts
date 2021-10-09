//const axios = require('axios');
import { Telegraf, Context } from 'telegraf';
import { serviceRedirect } from '../service/mainServiceRoute';
import { downloadVideo } from '../utils/youtubeDl';
import { getAvailableLanguages, getTranslation } from '../utils/translate';

const commandsHandler = function(bot: Telegraf){
    /*Test command*/
    bot.command('testcommand', (ctx: any) => {
        ctx.reply('command received');
    });

    bot.command('newOrder', (ctx: any) => {
        ctx.reply('Probably bad');
        serviceRedirect(bot);
    });

    /*Youtube commands*/
    bot.command('downloadYoutube', (ctx: any) => {
        ctx.reply('Baixando vídeo. \nPor favor aguarde, este processo pode levar algum tempo dependendo da velocidade da conexão e tamanho do vídeo.');
        downloadVideo(ctx);
        //ctx.reply(`This feature is not finished. URL: ${ctx.message.text.split(" ")[1]}`);
    });

    /*TRanslation commands*/
    bot.command('getTranslateLanguages', async (ctx: any) => {
        const message = await getAvailableLanguages()//.then(response => response).catch(err => err);
            .then((response: any) => {
                let responseMessage: string = '';
                response.forEach((language: any) => {
                    responseMessage += `Language: ${language.name}, Code: ${language.code} \n`;
                });
                return responseMessage;
            }).catch(err => {
                return err;
            });
        ctx.reply('Available languages: \n' + message);
    });

    bot.command('translateText', async (ctx: any) => {
        const requestMessage = ctx.message.text.split(" ");
        const message = await getTranslation(requestMessage[1], requestMessage[2], requestMessage[3]).then(response => response).catch(err => err);
        console.log(message);

        ctx.reply(message);
    })
}

//ideias de comando
// downloader de música // só áudio
// agenda // marcar coisas e lembrar após x tempo
// previsão do tempo //

export {
    commandsHandler
}
