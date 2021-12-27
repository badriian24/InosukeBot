const { MessageEmbed } = require("discord.js");
const img = require("../../Assets/anime/nezuko.json");

module.exports = {
	name: "nezuko",
	aliases: [],
	description: "nezuko random image",
  run: async(client, message, args) => {

					const embed = new MessageEmbed()
					.setAuthor(`nezuko`, client.user.displayAvatarURL())
					.setImage(img[Math.floor(Math.random() * img.length)])
.setColor(client.embedcolor)
.setFooter(client.footer)
message.channel.send({ embeds: [embed]})
		
}
}