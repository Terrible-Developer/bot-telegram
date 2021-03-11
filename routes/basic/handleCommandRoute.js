//const axios = require('axios');

const commandsHandler = function(bot){
    /*Test command*/
    bot.command('testcommand', ctx => {
        ctx.reply('command received');
    });

    bot.command('hello', ctx => {
        ctx.reply('world');
    });
}

module.exports.commandsHandler = commandsHandler;
