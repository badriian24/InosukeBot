const { Client, Message, MessageEmbed } = require('discord.js');
const guilds = require('../../Database/models/guild');

module.exports = {
	name: 'ar-remove',
	description: 'Remove a auto responder!',
	category: 'Administrator',
	aliases: ['ares-remove', 'autoresponder-remove'],
	// usages: [],
	// botPermissions: [],
	userPermissions: ['ADMINISTRATOR'],
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => {
		const guild = await guilds.findOne({ guildId: message.guild.id });
		if (guild.auto_responders.length <= 0) {
			return message.reply({
				content: `${
					client.emotes.error
				} | This server doesnt have any auto responders!`
			});
		}

		let iscommand = false;
		let commandIndex;
		guild.auto_responders.map(c => {
			if (c.trigger.toLowerCase() === args.join(' ').toLowerCase()) {
				iscommand = true;

				commandIndex = guild.auto_responders.indexOf(c);
			} else {
				iscommand = false;
			}
		});

		if (iscommand) {
			guild.auto_responders.splice(commandIndex, 1);
			guild.save();

			const embed = new MessageEmbed()
				.setAuthor(`Auto responder removed!`, client.user.displayAvatarURL())
				.setDescription(`Removed auto responder \`${args.join(' ')}\`!`)
				.setColor(client.embedcolor)
				.setFooter(client.footer, client.user.displayAvatarURL());

			return message.reply({ embeds: [embed] });
		} else {
			return message.reply({
				content: `${
					client.emotes.error
				} | Please supply a valid auto responder!`
			});
		}
	}
};
