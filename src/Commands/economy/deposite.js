const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "deposite",
	aliases: ["dep", "deposit"],
  description: "deposite your money to bank",
	run: async(client, message, args) => {
  let data = await client.fetchUser(message.author.id);
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

		if (message.content.includes('-')) { 
      return message.channel.send(`${client.emotes.error} You cant deposite negative coins`)
  }

    if (args.join(' ') === 'all') {
        if (data.coinsInWallet > data.bankSpace) {
            const max_deposit = (data.coinsInWallet + data.coinsInBank - data.bankSpace);
					
         
          if (data.coinsInBank-data.bankSpace === 0) {
            
            return message.reply(client.emotes.error + " **You don't have that much space in your bank. **");
        }
          
          
          
            data.coinsInWallet = max_deposit;
          
            await message.reply(`${client.emotes.yes} | Deposited **${(data.bankSpace - data.coinsInBank).toLocaleString()}** coins.`);

            data.coinsInBank = ((data.coinsInWallet + data.bankSpace) - max_deposit);

            await data.save();
        } else {

            if ((data.coinsInWallet + data.coinsInBank) > data.bankSpace) {
                const left = (data.coinsInWallet + data.coinsInBank) - data.bankSpace;

            
              
                await message.reply(`${client.emotes.yes} | Deposited **${(data.coinsInWallet - left).toLocaleString()}** coins`);
                
                data.coinsInBank += (data.coinsInWallet - left);
                data.coinsInWallet = left;

                await data.save();
            } else {
            
            await message.reply(`${client.emotes.yes} | Deposited **${(data.coinsInWallet).toLocaleString()}** coins`);

                data.coinsInBank += data.coinsInWallet;
                data.coinsInWallet = 0;

                await data.save();
            }
        }
    } else {
        if (isNaN(args[0])) {
        
            return message.reply(client.emotes.error + ' That\'s not a number.');
        }
        if ( data.bankSpace - data.coinsInBank < parseInt(args[0])) {
            
            return message.reply(client.emotes.error + ' Your bank is not big enough.');
        }
        if (parseInt(args[0]) > data.coinsInWallet) {
          
            return message.reply(client.emotes.error + " You don't have that much money.");
        }

        data.coinsInBank += parseInt(args[0]);
          

        
        await message.reply(`${client.emotes.yes} | Deposited **${parseInt(args[0])}** coins.`);

        data.coinsInWallet -= parseInt(args[0]);

        await data.save();
    }
}
}