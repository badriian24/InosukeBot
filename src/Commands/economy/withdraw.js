const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "withdraw",
	aliases: ["with", "wd"],
  description: "withdraw your bank to coins",
	run: async(client, message, args) => {
		let data = await client.fetchUser(message.author.id);
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

		if (message.content.includes('-')) { 
      return message.channel.send(`${client.emotes.error} You cant withdraw negative coins`)
  }
    if (args.join(' ') === 'all') {
                  if (data.coinsInBank === 0) {
            
										return message.reply(`${client.emotes.error} | your bank is empty`)
                  }
        data.coinsInWallet += data.coinsInBank;{
          
                
          await message.reply(`${client.emotes.exclamation} | Withdrawed **${data.coinsInBank.toLocaleString()}** coins.`);
          
        }

        data.coinsInBank -= data.coinsInBank;

        await data.save();
    } else {
      let withAmount = parseInt(args[0]);
            if (withAmount === 0) {
            
return message.reply(`${client.emotes.error} | Your can't withdraw 0 coins.`)
                  }
        if (isNaN(withAmount)) {
            
            return message.reply(client.emotes.error + ' That\'s not a number.');
        }

        if (parseInt(withAmount) > data.coinsInBank) {
               
            return message.reply(client.emotes.exclamation + ' You do not have that much coins.');
        }

        data.coinsInWallet += parseInt(withAmount); {
              
          await message.reply(`${client.emotes.yes} | Withdrawed **${parseInt(args[0])}** coins.`);
        }

        data.coinsInBank -= parseInt(withAmount);

        await data.save();
    }
	}
}