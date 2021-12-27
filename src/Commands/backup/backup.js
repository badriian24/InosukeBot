const backup = require("discord-backup");
const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
	name: "backup",
	aliases: [],
	description: "Backup System",
	run: async(client, message, args) => {
		
let values = ["create","load","info"]
        
        if(!args.length || !values.includes(args[0].toLowerCase())) {
            return message.reply({content: `Please select a options\ncreate, load [backupid], info [backupid]`})
        }
		
if(args[0].toLowerCase() === "create") {
	if (!message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) return message.channel.send(`You need \`ADMINISTRATOR\` Permissions`)
	message.channel.send(`${client.emotes.loading}** Creating Server Backup... This may take a few seconds.**`).then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch()
				
					
    
        await backup.create(message.guild).then((backupData) => {
					
				
            message.author.send({ content: `Successfully Created a Backup with the ID: \`${backupData.id}\`` })
					message.channel.send({
						content: `${client.emotes.yes} **Backup ID has been send to your dm :>**`
					})
					
        });
} else if(args[0].toLowerCase() === "load") {
	if (!message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) return message.channel.send(`You need \`ADMINISTRATOR\` Permissions`)
	if(!args[1]){
            return message.channel.send(client.emotes.error + " You must specify a valid backup ID!");
        }
	backup.fetch(args[1]).then(async () => {
            
	message.author.send({ content: "**Starting to Load Server Backup... This may take a few seconds.**" })
        await backup.load(args[1], message.guild);
backup.remove(args[1]);
                }).catch((err) => {
                    // If an error occurred
                    return message.author.send(client.emotes.error + ' ' + "**Sorry, an error occurred... Please check that I have administrator permissions!**");
                });
} else if (args[0].toLowerCase() === 'info') {
	if(!args[1]) return message.channel.send(client.emotes.error+ " You must specify a valid backup ID!")
	
        await backup.fetch(args[1]).then(async (backupData) => {
            await message.channel.send({
                embeds: [
                    new MessageEmbed()
.setColor(client.embedcolor)
                        .setTitle("Backup Information")
                        .addField("Backup ID", `${backupData.id}`)
                        .addField("Backup Size", `${backupData.size}`)
                        .addField("Time Created", `${new Date(backupData.data.createdTimestamp)}`)
                ]
            })
        }).catch((err) => {
					return message.channel.send(`${client.emotes.error} No backup found for \`${args[1]}\``)
				})
}
  }
}