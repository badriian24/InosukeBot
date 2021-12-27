const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "work",
	aliases: ["working"],
  cooldown: 300000,
  description: "get your money for random jobs",
	run: async(client, message, args) => {
const job = ["Kuli", "Drive"]
    
        let coins = Math.floor(Math.random() * 10000) + 1;
        message.channel.send(`**Yes You working in Kuli Bangunan and you get ${coins} coins**`)
client.giveCoins(message.author.id, parseInt(coins))
  }
}