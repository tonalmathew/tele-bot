const axios = require("axios");
const getGithubProfileDetails = (messageWithUserName, chat_id, api) => {

    if (messageWithUserName.startsWith("!")) {
        const newUsername = messageWithUserName.slice(1);
        const GH_API = `https://api.github.com/users/${newUsername}`;
        axios
            .get(GH_API)
            .then(function(response) {
                // console.log(response);
                // !Array Destructuring
                const [ghUsername, url, name, publicRepos, followers, following] = [
                    response.data.login,
                    response.data.html_url,
                    response.data.name,
                    response.data.public_repos,
                    response.data.followers,
                    response.data.following,
                ];
                api.sendMessage({
                    chat_id: chat_id,
                    text: url +
                        "\n* Name: *" +
                        name +
                        "\n* Username: *" +
                        ghUsername +
                        "\n* Public Repos: *" +
                        publicRepos +
                        "\n* Followers: *" +
                        followers +
                        "\n* Following: *" +
                        following,
                    parse_mode: "Markdown",
                });
                api.sendSticker({
                    chat_id: chat_id,
                    sticker_set_name: "😂"
                })
            })
            .catch(function(err) {
                api.sendMessage({
                    chat_id: chat_id,
                    text: "മോനാ ക്ഷെമിക്കു!!",
                    parse_mode: "Markdown",
                });
                console.log(err);
                console.log("error anallo");

            });
    }
};

module.exports = getGithubProfileDetails;