const TG = require('telegram-bot-api');
const axios = require('axios');


const api = new TG({
    token: 'telegram token'
})

// Define your message provider
const mp = new TG.GetUpdateMessageProvider()



// Set message provider and start API
api.setMessageProvider(mp)
api.start()
    .then(() => {
        console.log('API is started')
    })
    .catch(console.err)

// Receive messages via event callback
api.on('update', update => {

    const username = update.message.text;
    const chat_id = update.message.chat.id;

    // Send text message
    if (username.startsWith('!')) {
        const newUsername = username.slice(1, );
        const GH_API = `https://api.github.com/users/${newUsername}`
        axios.get(GH_API)
            .then(function(response) {
                const ghUsername = response.data.login;
                const avatar = response.data.avatar_url;
                // api.sendMessage({
                //     chat_id: chat_id,
                //     text: ghUsername,
                //     parse_mode: 'Markdown',
                // })
                api.sendPhoto({
                    chat_id: chat_id,
                    photo: avatar,
                    caption: ghUsername,
                })
            })
            .catch(function(err) {
                console.log(err);
            })

    }



})
