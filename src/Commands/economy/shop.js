const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "shop",
  aliases: ["store"],
	description: "Shop item list",
	run: async(client, message, args) => {
    const embed = new MessageEmbed()
	.setAuthor(`Shop`, client.user.displayAvatarURL())
	.setDescription(`buy anything with \`${client.prefix}buy [itemId]\`\n\n📜 **Bank Note - __10__,__000__** __coins__\n\`id: banknote\`\nUse this to increase your back capacity\n\n🗡 **Sword - __2__,__500__** __coins__\n\`id: sword\`\nUse this to go hunting\n\n⛏️ **Pickaxe - __30__,__000__** __coins__\n\`id: pickaxe\`\nUse this to mine gems.\n\n🚖 **Car - __20__,__000__** __coins__\n\`id: car\`\ndriver and get a coins.`)
	.setColor(client.embedcolor)
  .setFooter(client.footer, client.user.displayAvatarURL())
	.setTimestamp()
	message.channel.send({embeds: [embed]})
  }
}