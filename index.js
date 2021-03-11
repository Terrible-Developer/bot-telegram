const { Telegraf } = require('telegraf');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

const { testMessage, commandRoutes, messageRoutes } = require('./routes/basic/mainRoute.js');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.setWebhook(`${process.env.BOT_URL}/bot${process.env.BOT_TOKEN}`);
app.use(bot.webhookCallback(`/bot${process.env.BOT_TOKEN}`));

bot.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const response_time = new Date() - start;
});

commandRoutes(bot);
messageRoutes(bot);
testMessage(bot);


bot.launch();

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
