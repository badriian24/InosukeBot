const { Client, MessageEmbed, Message } = require("discord.js");

module.exports = {
	name: "botinfo",
	aliases: ["stats"],
	run: async(client, message, args) => {

let ram = ((process.memoryUsage().heapUsed / 1024 / 1024) + (process.memoryUsage().heapTotal / 1024 / 1024)).toFixed(2);
                
		const about = new MessageEmbed()
			.setAuthor(client.user.username, client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`> ${client.emotes.exclamation} • **General**\n**- Name:** ${client.user.username}\n**- Create At:** <t:${Math.floor(
        client.user.createdAt / 1000
      )}:F>\n**- Version:** v2.0.0\n**- Node.js:** v16\n\n> ${client.emotes.exclamation} • **Counting**\n**- Servers Count:** ${client.guilds.cache.size}\n**- All Users Count:** ${client.users.cache.size}\n**- All Channels Count:** ${client.channels.cache.size}\n**- Commands Count:** ${client.commands.size}\n\n> ${client.emotes.exclamation} • **Engine**\n**- Platform:** not know\n**- Ram Usage:** ${ram}Mb\n\n> **💳 • Credits**\n**Emoji Server**\n\nIcons: [Click Here](https://discord.gg/WpFxyXZSUX)\n**Music**\n[Erela](https://www.npmjs.com/package/erela.js)\n[Lavalink](https://devin-dev.xyz)\n\nNote For Devs: I do not copy and paste code and put in a bot I have coded this bot for a long time, if i copy paste code i will definitely give credits`)
    .setColor(client.embedcolor)
    .setFooter(client.footer, client.user.displayAvatarURL())
    .setTimestamp()
		
	message.reply({ embeds: [about] })
	}
};