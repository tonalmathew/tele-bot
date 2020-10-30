const getGithubProfileDetails = (messageWithUserName, chat_id) => {
  if (messageWithUserName.startsWith("!")) {
    const newUsername = messageWithUserName.slice(1);
    const GH_API = `https://api.github.com/users/${newUsername}`;
    axios
      .get(GH_API)
      .then(function (response) {
        // !Array Destructuring
        const [
          ghUsername,
          avatar,
          url,
          name,
          publicRepos,
          followers,
          following,
        ] = [
          response.data.login,
          response.data.avatar_url,
          response.data.name,
          response.data.public_repos,
          response.data.followers,
          response.data.following,
        ];
        api.sendMessage({
          chat_id: chat_id,
          text:
            url +
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
      })
      .catch(function (err) {
        console.log(err);
      });
  }
};

module.exports = getGithubProfileDetails;
