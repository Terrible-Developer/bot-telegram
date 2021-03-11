//const axios = require('axios');

const { commandsHandler } = require('./handleCommandRoute.js');
const { messagesHandler } = require('./handleMessageRoute.js');

const commandRoutes = function(bot){
    commandsHandler(bot);
}

const messageRoutes = function(bot){
    messagesHandler(bot);
}

const testMessage = function(bot){
    bot.hears('test', ctx => ctx.reply('tested from another file'));
}


module.exports.commandRoutes = commandRoutes;
module.exports.messageRoutes = messageRoutes;
module.exports.testMessage = testMessage;
