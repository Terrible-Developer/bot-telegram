const { Telegraf } = require('telegraf');

require('dotenv').config();

const { testMessage, commandRoutes, messageRoutes } = require('./routes/basic/mainRoute.js');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const response_time = new Date() - start;
});

commandRoutes(bot);
messageRoutes(bot);
testMessage(bot);


bot.launch();
