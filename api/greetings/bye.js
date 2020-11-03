const byeMessage = (greetings, chat_id, name, api) => {
    const bye = "bye";

if (greetings.toString().toLowerCase().includes(bye)) {
    // console.log(messageWithUserName);
    api.sendMessage({
        chat_id: chat_id,
        text: "Hope to see you around again Bye!! \nപുറത്തുപോകുക \nഉടൻ കാണാം "+ name,
        parse_mode: "Markdown",
    });
}
}

module.exports = byeMessage;
















