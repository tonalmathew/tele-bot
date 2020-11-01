const TG = require("telegram-bot-api");
const dotenv = require("dotenv");
const getDetails = require("./api/getDetails.api.github");
const intro = require("./api/commands");
const goodMorning = require("./api/goodMorning");
const bye = require("./api/bye");
const byeMessage = require("./api/bye");
dotenv.config();

const bot = new TG({
    token: process.env.BOT_TOKEN,
});

const mp = new TG.GetUpdateMessageProvider();

bot.setMessageProvider(mp);
bot
    .start()
    .then(() => {
        console.log("API is started");
    })
    .catch(console.err);

bot.on("update", (update) => {
    // console.log(update);
    const [message, chat_id, name] = [
        update.message.text,
        update.message.chat.id,
        update.message.from.first_name
    ];

    if (message.startsWith("/")) {
        switch (message) {
            case "/start":
                intro.start(name, bot, chat_id);
                break;
        }
    }
    getDetails(message, chat_id, bot);
    goodMorning(message, chat_id, name, bot);
    byeMessage(message, chat_id, name, bot);
});