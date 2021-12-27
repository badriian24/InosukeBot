const { Client, Message, MessageEmbed } = require("discord.js")
const guilds = require("../../Database/models/guild")
module.exports = {
    name: "ar-list",
    description: "List all auto responders",
    category: "Administrator",
    aliases: ["ares-list", "autoresponder-list"],
    // usages: [],
    // botPermissions: [],
    //userPermissions: ["ADMINISTRATOR"],
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const guild = await guilds.findOne({guildId: message.guild.id})

        if(guild.auto_responders.length <=0) {
            return message.reply({content: `${client.emotes.error} | This server doesnt have any auto responders!`})
        }

        const embed = new MessageEmbed()
        .setAuthor(`${message.guild.name} Auto responsers!`, message.guild.iconURL())
        .setDescription(`- \`${guild.auto_responders.map((c) => `${c.trigger}`).join("`\n- `")}\``)
        .setColor(client.embedcolor)
					.setFooter(client.footer, client.user.displayAvatarURL())

        return message.reply({embeds: [embed]})
    }
}