const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "report",
	description: "report a user or command or bug",
	aliases: [],
	run: async(client, message, args) => {
		const kosong = args[0];
		if(!kosong) return message.channel.send(`${client.emotes.error} | Please type a bug or report a user`)
   const reportCh = client.channels.cache.get('897991320470171701') 

		const reportEmbed = new MessageEmbed()
		.setAuthor(`New Report`, message.author.displayAvatarURL())
.setThumbnail(message.author.displayAvatarURL())
		.setDescription(`**${client.emotes.exclamation} | Report by:** ${message.author.tag} (<@${message.author.id}>)\n**📣 • Report msg:** ${args.join(" ")}\n**🛡 • Guild Report:** ${message.guild.name}`)
		.setColor(client.embedcolor)
.setFooter(`report a bug or report user`)
		reportCh.send({ embeds: [reportEmbed] })
 message.channel.send(`${client.emotes.yes} | Successful to send a report, Thanks to report **${message.author.username}**`)
}
}