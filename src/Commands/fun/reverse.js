const { Client, Message, MessageEmbed } = require('discord.js');
const sendError = require('../../Utils/Embed/error');

module.exports = {
    name: 'reverse',
    description: 'reverses the text you typed (entered)',
	aliases: [],
    usage: '[TEXT]',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if (!args[0]) return message.reply('Please enter a text (at least 3 characters, and equal/less than 1000 characters)');
        if (args[0].length < 3 || args[0].length > 1000) return message.reply('Text cannot be less than 3, or more than 1000 characters.')
        message.channel.send({ embeds: [ new MessageEmbed({
            title: 'Alright!',
            description: `**Here is the reversed text you have entered!**\n\`${args.join(" ").split("").reverse().join("")}\``,
            color: client.embedcolor
        }) ] })
    },
};