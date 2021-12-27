const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'kick',
	aliases: [],
	  UserPerms: ["KICK_MEMBERS"],
	  BotPerms: ["KICK_MEMBERS"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {

        const arg = args.join(" ").split(" ? ")
        let member = message.mentions.members.first() ||
        message.guild.members.cache.find(m => m.id === arg[0] || m.user.username.toLowerCase() === arg[0].toLowerCase() || m.user.tag.toLowerCase() === arg[0].toLowerCase()) 
        if(!member) {
            return message.reply({content: `${client.emotes.error} | Please supply a valid member!`})
        }
        let reason = args[1] || "No reason"
        
        if(member.roles.highest.position >= message.guild.me.roles.highest.position) {
            return message.reply({content: `${client.emotes.error} | I can not kick members with the same or a higher role than me!`})
        }

			member.kick({reason: reason})
							const kicked = new MessageEmbed()
							.setAuthor(`Kicked!`, client.user.displayAvatarURL())
							.setDescription(`Kicked: ${member}\nModerator: ${message.author.tag}\nreason: ${reason}`)
.setColor(client.embedcolor)
.setFooter(client.footer)
							message.channel.send({ embeds: [kicked] })
            setTimeout(() => {
            message.delete().catch(() => {})
        }, 100);
    }
}