import { Telegraf } from 'telegraf';
import express from 'express';
import { testMessage, commandRoutes, messageRoutes } from './routes/basic/mainRoute';

const app = express();
const port: any = process.env.PORT || 3000;
require('dotenv').config();


const bot: Telegraf = new Telegraf(process.env.BOT_TOKEN!);

bot.telegram.setWebhook(`${process.env.BOT_URL}/bot${process.env.BOT_TOKEN}`);
app.use(bot.webhookCallback(`/bot${process.env.BOT_TOKEN}`));

bot.use(async (ctx, next): Promise<void> => {
    const startTime: number = new Date().getTime();
    await next();
    const responseTime: Date = new Date(( new Date().getTime() - startTime));
});

commandRoutes(bot);
messageRoutes(bot);
testMessage(bot);


bot.launch();

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
