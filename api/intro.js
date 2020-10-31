module.exports = {
    start: (name, bot, chat_id) => {
        bot.sendMessage({
            chat_id: chat_id,
            text: `Hey ${name}, I am \*Amminathatha* you can call me amina😅`,
            parse_mode: "Markdown"
        })

    }
}