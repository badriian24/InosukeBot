const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: "invite",
	aliases: ["support"],
  run: async(client, message, args) => {
  
				const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://discord.com/oauth2/authorize?client_id=802436261519687720&permissions=4294967287&scope=bot%20applications.commands')
					.setLabel('Invite Me!')
					.setStyle('LINK')
			);

			const row1 = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://discord.gg/nvVjVmTvBj')
					.setLabel('Support Server!')
					.setStyle('LINK')
			);
		const embed = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
		.setColor(client.embedcolor)
		.setAuthor(`This is all link`)
		.setDescription(`Please press a button bellow`)
			.setTimestamp()
		.setFooter(client.footer)
		message.channel.send({ embeds: [embed], components: [row, row1] })
}
} 