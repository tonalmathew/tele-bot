const goodNightAll = (greetings, chat_id, name, api) => {
    const night = "good night";
    // console.log(greetings);
    if (greetings.toString().toLowerCase().includes(night)) {
        // console.log(greetings);
        api.sendMessage({
            chat_id: chat_id,
            text: "Good Night " + name + "😴",
            parse_mode: "Markdown",
        });
    }

}

module.exports = goodNightAll;