const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "inventory",
  aliases: ["inv"],
	description: "your item list",
	run: async(client, message, args) => {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const user = await client.fetchUser(message.author.id);
    let number = 5 * parseInt(args[0]);
    let page;
    if (user.items.length <= 5) page = 1;
    else if (user.items.length <= 10) page = 2;
    else if (user.items.length <= 15) page = 3;
    else if (user.items.length <= 20) page = 4;
    if (!args[0]) {
        number = 5;
    }
    let item = user.items.slice(number - 5, number);
    if (item.length < 1) {
        return message.reply(client.emotes.error + ' You have no items.');
    }
    const items = item.map(x => `${x.description}\n  \`id: ${x.name} \` x ${x.amount.toLocaleString()}`);
    const embed = new MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        
        .setAuthor(`${message.author.username}'s Inventory`)
        .setDescription(`${items.join('\n\n')}`)
        .setFooter(`Page ${args[0] || 1} of ${page}`)
        .setColor(client.embedcolor);
    message.channel.send({ embeds: [embed] });
	}
}