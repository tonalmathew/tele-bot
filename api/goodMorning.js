const goodMorningAll = (greetings, chat_id, name, api) => {
    const morning = "good morning";
    // console.log(greetings);
    if (greetings.toString().toLowerCase().includes(morning)) {
        // console.log(greetings);
        api.sendMessage({
            chat_id: chat_id,
            text: "Good Morning " + name + "😇",
            parse_mode: "Markdown",
        });
    }

}

module.exports = goodMorningAll;