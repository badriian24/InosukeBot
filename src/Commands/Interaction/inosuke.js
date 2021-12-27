const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "inosuke",
	aliases: [],
	description: "random image with inosuke",
  run: async(client, message, args) => {
fetch(`https://api.bdrxzzzz.xyz/api/anime/inosuke`)
        .then(response => response.json())
        .then(data => {
const img = data.image;

					const embed = new MessageEmbed()
					.setAuthor(`Inosuke`, client.user.displayAvatarURL())
					.setImage(img)
.setColor(client.embedcolor)
.setFooter(client.footer)
message.channel.send({ embeds: [embed]})
})
}
}