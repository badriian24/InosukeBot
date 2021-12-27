const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const jokee = require("discord-jokes");

module.exports = {
  name: "joke",
	aliases: [],
	description: "joke 👍",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    jokee.getRandomDadJoke(function (joke) {
      message.reply({ content: joke });
    });
  },
}; 