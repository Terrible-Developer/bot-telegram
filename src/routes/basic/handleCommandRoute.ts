//const axios = require('axios');
import { Telegraf, Context } from 'telegraf';
import { serviceRedirect } from '../service/mainServiceRoute';

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
        ctx.reply(`This feature is not finished. URL: ${ctx.message.text.split(" ")[1]}`);
    });
}

export {
    commandsHandler
}
