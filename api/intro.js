module.exports = {
    startMessage: (name, bot, chat_id) => {
        bot.sendMessage({
            chat_id: chat_id,
            text: `Hey, ${name} i am \*Amminathatha* you can call me amina😅`,
            parse_mode: "Markdown"
        })

    }
}