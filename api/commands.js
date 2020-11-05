module.exports = {
  startMessage: (name, bot, chat_id) => {
    bot.sendChatAction({ chat_id: chat_id, action: "typing" });
    bot.sendMessage({
      chat_id: chat_id,
      text: `Hey ${name}, I am \*Aaminathatha* you can call me Aamina😅`,
      parse_mode: "Markdown",
    });
  },
};
