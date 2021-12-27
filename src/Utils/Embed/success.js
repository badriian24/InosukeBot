const client = require("../../index");
const { MessageEmbed } = require('discord.js');

module.exports = async (text, channel) => {
    const embed = new MessageEmbed({
        title: 'Success',
        description: `${client.emotes.yes} **|** ${text}`,
        color: client.embedcolor
});
channel.send({ embeds: [ embed ] })
}