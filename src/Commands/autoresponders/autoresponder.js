const { Message, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'autoresponder',
	aliases: ['ares', 'autoresponders'],
	description: 'info for commands autoresponder',
	run: async (client, message, args) => {
		const ar = new MessageEmbed()
			.setAuthor(`Input invalid syntax`)
			.setDescription(
				`To use autoresponder command, please use it correctly as bellow\n\n**Command List For Autorespond**\n\`autoresponder-add [text] | [text]\`\n\`autoresponder-remove [name]\`\n\`autoresponder-list\``
			)
			.setColor(client.embedcolor)
			.setFooter(client.footer, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [ar] });
	}
};
