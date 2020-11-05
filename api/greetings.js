module.exports = (greetingMessage, chat_id, name, bot) => {
  bot.sendChatAction({ chat_id: chat_id, action: "typing" });
  greetingMessage = greetingMessage.toString().toLowerCase();

  const [bye, goodNight, goodMorning] = ["bye", "good night", "good morning"];

  if (greetingMessage.includes(bye)) {
    bot.sendMessage({
      chat_id: chat_id,
      text:
        "Hope to see you around again Bye!! \nപുറത്തുപോകുക \nഉടൻ കാണാം " +
        name,
      parse_mode: "Markdown",
    });
  } else if (greetingMessage.includes(goodMorning)) {
    bot.sendMessage({
      chat_id: chat_id,
      text: "Good Morning " + name + "😇",
      parse_mode: "Markdown",
    });
  } else if (greetingMessage.includes(goodNight)) {
    bot.sendMessage({
      chat_id: chat_id,
      text: "Good Night " + name + "😴",
      parse_mode: "Markdown",
    });
  }
};
