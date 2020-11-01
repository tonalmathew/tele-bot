module.exports = {
    start: (name, bot, chat_id) => {
        bot.sendMessage({
            chat_id: chat_id,
            text: `Hey ${name}, I am \*Aaminathatha* you can call me Aamina😅`,
            parse_mode: "Markdown"
        })

    }
}