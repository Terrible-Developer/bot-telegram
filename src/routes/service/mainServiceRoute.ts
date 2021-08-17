import { Telegraf, Context } from 'telegraf';

const serviceRedirect = function(bot: Telegraf){
    bot.on('text', ctx => {
        switch(ctx.message.text.toLowerCase()){
        case 'order1':
            ctx.reply('yes');

        default:
            ctx.reply('Unknown command, please try again!');
        }
    });
}

export {
    serviceRedirect
}
