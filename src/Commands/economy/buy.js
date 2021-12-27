const { MessageEmbed } = require("discord.js");
const itemss = require('../../Structure/Economy/items');

module.exports = {
	name: "buy",
  aliases: [],
	description: "buy a items",
	run: async(client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await client.fetchUser(message.author.id);
    if (!args.join(' ')) {
            
        return message.channel.send(client.emotes.error + " you can't buy nothing, please enter the correct item id");
    }
    if (!args[1]) args[1] = '';
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()} ${args[1].toString().toLowerCase()}`);
    if (!item) {
          
        return message.reply(client.emotes.error + " You can't buy an item that doesn't exist please use the correct item id");
    }
    if (item.canBuy == false) {
          
        return message.reply(client.emotes.error + " You can't buy this item");
    }
    let buyAmount = args.join(' ').toString().match(/([1-9][0-9]*)/)
    if (!buyAmount) buyAmount=1;
    else buyAmount = buyAmount[0]
    if (item.price > user.coinsInWallet || (buyAmount*item.price) > user.coinsInWallet) {
            
        return message.reply(client.emotes.error + " You dont have the funds to buy this item.");
    }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (founditem) {
        array.push({
            name: item.name,
            amount: (parseInt(founditem.amount) + parseInt(buyAmount)),
            description: item.description
        });
        user.items = array;
        await user.save();
    }
    else {
        user.items.push({
            name: item.name,
            amount: buyAmount,
            description: item.description
        });
        await user.save();
    }
    user.coinsInWallet -= (parseInt(item.price)*parseInt(buyAmount));
    await user.save();
            
            
    message.reply(`You bought **${parseInt(buyAmount).toLocaleString()}** \`${item.name}\``);
  }
}