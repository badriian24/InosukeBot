const { MessageEmbed } = require("discord.js");
const economy = require("../../Database/models/economy");

module.exports = {
	name: "rich",
  aliases: ["top"],
	description: "rich?",
	run: async(client, message, args) => {
		let data = await economy.find().sort([['coinsInWallet', 'descending']])
    data = data.filter(x => message.guild.members.cache.get(x.userId) && message.guild.members.cache.get(x.userId).bot != true).slice(0, 6);
    if (data.length == 0) return message.channel.send('No rich people in this server'); 
    
    const emojis = [':first_place:', ':second_place:', ':third_place:'];
    data = data.map((x, i) => `${emojis[i] || '🔹'} **${x.coinsInWallet.toLocaleString()}** - ${client.users.cache.get(x.userId).tag || 'Unkown#0000'}`);

    const embed = new MessageEmbed()
        .setAuthor(`Richest people in ${message.guild.name}`)
        .setDescription(`${data.join('\n')}`)
        .setColor(client.embedcolor)
        .setFooter('top coins');
    message.channel.send({ embeds: [embed] });
	}
}