const TG = require("telegram-bot-api");
const dotenv = require("dotenv");
const getDetails = require("./api/getDetails.api.github");

dotenv.config();

const api = new TG({
    token: process.env.BOT_TOKEN,
});

const mp = new TG.GetUpdateMessageProvider();

api.setMessageProvider(mp);
api
    .start()
    .then(() => {
        console.log("API is started");
    })
    .catch(console.err);

api.on("update", (update) => {
    const [messageWithUserName, chat_id] = [
        update.message.text,
        update.message.chat.id,
    ];

    getDetails(messageWithUserName, chat_id, api);
});

// mysterious-earth-56254
// https://mysterious-earth-56254.herokuapp.com/