const { Client, Message, MessageEmbed } = require('discord.js');
const sendError = require('../../Utils/Embed/error');
const warnModel = require('../../Database/models/users');

module.exports = {
    name: 'removewarn',
    description: 'Reamove warining of user',
    aliases: ['remove-warn'],
    UserPerms: ['MANAGE_MESSAGES'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const warnId = args[0];

        const data = await warnModel.findById(warnId);

        if (!warnId) return message.channel.send({ content: 'Please provide a warning ID' });
        if (!data) return sendError(`\`${warnId}\` is not a valid warning ID!`, message.channel);

        data.delete();
        const moderator = message.guild.members.cache.get(data.moderatorId);
        const embedDescription = [
            `**Warning Id:** \`${warnId}\``,
            `**User Warned:** <@${data.userId}>`,
            `**Time Warned:** <t:${data.timestamp}:f>`,
            `**Moderator:** ${moderator || "Has Left The Server"}`
        ].join('\n')
        message.channel.send({ embeds: [ new MessageEmbed().setTitle('Success!').setDescription(`Removed warnings from ID! Look the details!\n`).addField('DETAILS', embedDescription).setFooter(`${client.user.username} warning system v3`).setColor(client.embedcolor) ] })
    },
};