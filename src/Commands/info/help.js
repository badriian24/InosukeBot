const { Client, MessageEmbed, Message } = require("discord.js");
const users = require("../../Database/models/users");

module.exports = {
	name: "help",
	aliases: [],
	run: async(client, message, args) => {
const userSch = await users.findOne({userId: message.author.id})
if(!userSch) {
	users.create({userId: message.author.id})
}
		const prefix = client.prefix;
		if (!args.length) {
		const help = new MessageEmbed()
		.setAuthor(`Help`, client.user.displayAvatarURL())
		.setColor(client.embedcolor)
		.setThumbnail("https://media.discordapp.net/attachments/897833814024417362/897851793105641472/Screenshot_20211013-212214.png")
		.setDescription(`Hello **${message.author.username}** to view all variable command use \`${prefix}commands\`, to view specific commands use \`${prefix}commands <name/alias>\`\n\n*if you find a bug use the command \`${prefix}report\` or you can join the official support server using \`${prefix}support\`, thx to invite ${client.user.username} in server <:smug:897857927560429598>*`)
		.setTimestamp()
		.setFooter(client.footer)
		message.channel.send({ embeds:[help] })
} else {
			const command =
				client.commands.get(args[0].toLowerCase()) ||
				client.commands.get(client.aliases.get(args[0]));


			if (!command) return message.channel.send({
				content: `**${client.emotes.error} | Invalid command. Use \`${prefix}commands\` to see all commands.**`
			});


			const emb3 = new MessageEmbed()
				.setAuthor(`Commands Details`, client.user.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL())
				.setDescription(`>>> **Name:** ${command.name ? `\`${command.name}\`` : "Not Provided"}\n**Description:** ${command.description ? `\`${command.description}\`` : "Not know"}\n**Maintance:** ${command.Maintance ? `\`${command.Maintance}\`` : "`false`"}\n**Aliases:** ${command.aliases ? `\`${command.aliases.join(" ")}\`` : "No Aliases"}\n**Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : `\`${prefix}${command.name}\``}`)
				.setColor(client.embedcolor)
				.setFooter(client.footer, client.user.displayAvatarURL())
				.setTimestamp()
			message.channel.send({
				embeds: [emb3]
			})
		
}
	}
}