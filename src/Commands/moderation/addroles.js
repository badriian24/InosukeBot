const { Message } = require('discord.js')

module.exports = {
    name : 'addrole',
    aliases: ["addroles"],
	  //UserPerms: ["MANAGE_ROLES"],
	  ownerOnly: true,
    BotPerms: ["MANAGE_ROLES"],
    run : async(client, message, args) => {

			let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id === args.join(" ").toLowerCase() || r.name.toLowerCase() === args.join(" ").toLowerCase())
        if(!role || !args) {
            return message.reply({content: `${client.emotes.error} • Please supply a valid role!`})
        }
if(role.position >= message.guild.me.roles.highest.position) {
            return message.reply({content: `${client.emotes.error} | Missing permissions! Please move my role higher than the mentioned role!`})
        }

			
        const target = message.mentions.members.first() 
        if(!target) return message.channel.send('**No member specified**') 
        
        await target.roles.add(role)
        message.channel.send(`${target.user.username} **has added ${role} role**`)
    }
}