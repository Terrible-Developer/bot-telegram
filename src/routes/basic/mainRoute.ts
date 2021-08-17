//const axios = require('axios');
import { Telegraf } from 'telegraf';

import { commandsHandler } from './handleCommandRoute';
import { messagesHandler } from './handleMessageRoute';

const commandRoutes = function(bot: Telegraf){
    commandsHandler(bot);
}

const messageRoutes = function(bot: Telegraf){
    messagesHandler(bot);
}

const testMessage = function(bot: Telegraf){
    bot.hears('test', ctx => ctx.reply('tested from another file'));
}

export {
    commandRoutes,
    messageRoutes,
    testMessage
}
