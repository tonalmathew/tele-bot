const TG = require('telegram-bot-api');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();




const api = new TG({
    token: process.env.TELE_API_KEY
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
    console.log(update)
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
                const url = response.data.html_url;
                const name = response.data.name;
                const publicRepos = response.data.public_repos;
                const followers = response.data.followers;
                const following = response.data.following;
                api.sendMessage({
                    chat_id: chat_id,
                    // text: ghUsername,
                    text: url +
                        "\n* Name: *" + name +
                        "\n* Username: *" + ghUsername +
                        "\n* Public Repos: *" + publicRepos +
                        "\n* Followers: *" + followers +
                        "\n* Following: *" + following,
                    parse_mode: 'Markdown',
                })

            })
            .catch(function(err) {
                console.log(err);
            })

    }



})