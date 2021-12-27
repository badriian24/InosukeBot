const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "balance",
	aliases: ["bal"],
	description: "check you wallet",
	run: async(client, message, args) => {
		
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
		if(member === member.bot) return message.channel.send("Bot do not have a balance!");

    const user = await client.fetchUser(member.id);
    const embed = new MessageEmbed()
        .setAuthor(`${member.user.username}'s Balance`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setDescription(`${client.emotes.coin} **Coins**: ${user.coinsInWallet.toLocaleString()}\n🏦 **Bank**: ${user.coinsInBank.toLocaleString()}/${user.bankSpace.toLocaleString()}\n🌐 **Total Net Worth**: ${(user.coinsInWallet + user.coinsInBank).toLocaleString()}`)
        .setFooter(client.footer, client.user.displayAvatarURL())
        .setColor(client.embedcolor);
    message.channel.send({ embeds: [embed]});
	}
}