const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
	name: "suggestbot",
	description: "suggest a bot",
	aliases: ["request"],
	run: async(client, message, args) => {
		const kosong = args[0];
		if(!kosong) return message.channel.send(`${client.emotes.error} | Please type Suggestion For Request/Ask Staff for Help`)
   const reportCh = client.channels.cache.get('897991346894295092') 

		const reportEmbed = new MessageEmbed()
		.setAuthor(`New Suggestion`, message.author.displayAvatarURL())
.setThumbnail(message.author.displayAvatarURL())
		.setDescription(`**${client.emotes.exclamation} | Suggest by:** ${message.author.tag} (<@${message.author.id}>)\n**📣 • Suggestion msg:** ${args.join(" ")}\n**🛡 • Guild Suggestion:** ${message.guild.name}`)
		.setColor(client.embedcolor)
.setFooter(`Suggestion For Request/Ask Staff for Help`)
		reportCh.send({ embeds: [reportEmbed] })
 message.channel.send(`${client.emotes.yes} | Successful to send a report, Thanks to Suggestion **${message.author.username}**`)
}
}