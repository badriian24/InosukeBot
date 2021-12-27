const { MessageEmbed } = require("discord.js");
const itemss = require('../../Structure/Economy/items');

module.exports = {
	name: "use",
	aliases: [],
	description: "use your items",
	run: async(client, message, args) => {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await client.fetchUser(message.author.id);
    if (!args.join(' ')) {
      
              let use1embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${client.emotes.error} **${member.user.username}**  | You forgot to type the items \`id\`.`);
              return message.channel.send({ embeds: [use1embed] });
        //////return message.channel.send("you can't use nothing lmao");
      
    }
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase());
    if (!item) {
      
              let use2embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${client.emotes.error} **${member.user.username}** | You dont have this item make sure you have typed the correct \`id\`.`);
              return message.channel.send({ embeds: [use2embed] });
        //////return message.channel.send("can't use this item");
      
    }
    if (!item.canUse) {

              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${client.emotes.error} **${member.user.username}** | You can't use this item.`);
              return message.channel.send({ embeds: [use3embed] });
        //////return message.channel.send(":thinking: You can't use this item");

    }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${client.emotes.error} **${member.user.username}**  | You dont have this item make sure you have typed the correct \`id\`.`);
              return message.channel.send({ embeds: [use3embed] });
        //////return message.channel.send("you don't have this item");
    }
    
    if (item.keep == false) {
        if (founditem.amount === 1) {
            user.items = user.items.filter(x => x.name.toLowerCase() != item.name.toLowerCase());
            await user.save();
        }
        else {
            array.push({
                name: item.name,
                amount: founditem.amount - 1,
                description: item.description
            });
            user.items = array;
            await user.save();
        }
    }
    await item.run(client, message, args);

	}
}