const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "transfer",
	aliases: ["give"],
  description: "give a coins to users",
	usage: ["[user] [amount]"],
  run: async(client, message, args) => {
    const usertag = message.member;
    const authorData = await client.fetchUser(message.author.id);
if (message.content.includes('-')) { 
      return message.channel.send(`${client.emotes.error} You cant give negative coins`)
  }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]);

    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${client.emotes.error} **${usertag.user.username}** | You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
        if (authorData.passive == true) return message.channel.send({ embeds: [passivewarn] });

    if (!member || !args[0]) {
      
    let sendcoinsembed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${client.emotes.error} **${usertag.user.username}** | Who are you giving coins too ?`);
    return message.channel.send({ embeds: [sendcoinsembed] }).catch();
        //return message.channel.send(`Who are you giving the coins to?`);
    }
    if (member.user.id == message.author.id) {
    let sendcoinsembed1 = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${client.emotes.error} **${usertag.user.username}** | You can't give coins to yourself.`);
    return message.channel.send({ embeds: [sendcoinsembed1] }).catch();
   //return message.channel.send(`Lol you can't give yourself coins u crazy.`);
    }
    if (!args[1]) {
    let sendcoinsembed2 = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${client.emotes.error} **${usertag.user.username}** | How many coins are you giving them.`);
    return message.channel.send({ embeds: [sendcoinsembed2] }).catch();
    //return message.channel.send(`How much coins are you giving them?`);
    }

    if (isNaN(args[1]) && args[1] != 'all') {
        return message.channel.send(`Thats not a valid option`)
    }
    const userData = await client.fetchUser(member.user.id);
    if (userData.passive == true) {
    let sendcoinsembed3 = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${client.emotes.error} **${member.user.username}** | The user your trying to give coins to has \`PASSIVE\` enabled they will have to disable it to be able to revice coins.`);
    return message.channel.send({ embeds: [sendcoinsembed3] }).catch();
      //return message.channel.send(`That user is in passive mode, they can't recive any coins`);
    }
                                  
    if (args[1] == 'all') {
        const toGive = authorData.coinsInWallet;

        authorData.coinsInWallet = 0;

        await authorData.save();

        userData.coinsInWallet = (userData.coinsInWallet + toGive);

        userData.save();

    let sendcoinsembed3 = new MessageEmbed()
    .setColor(client.embedcolor)
    .setDescription(`${client.emotes.yes} You transfer ${member} **${parseInt(toGive).toLocaleString()}** coins`);
    message.channel.send({ embeds: [sendcoinsembed3] }).catch();
        //message.channel.send(`You gave ${member} **${parseInt(toGive).toLocaleString()}** coins`); //Change the message how u like
    } else {
        const toGive = args[1];

        if (toGive > authorData.coinsInWallet) {
          
    let sendcoinsembed222 = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${client.emotes.error} You don't have that many coins.`);
    return message.channel.send({ embeds: [sendcoinsembed222] }).catch();
          
          //return message.reply(`You don't have that many coins.`);
        }

        authorData.coinsInWallet = (authorData.coinsInWallet - parseInt(toGive));

        await authorData.save();

        userData.coinsInWallet = (userData.coinsInWallet + parseInt(toGive));

        await userData.save();
    const usertag = message.member;
    let sendcoinsembed3 = new MessageEmbed()
    .setColor(client.embedcolor)
    .setDescription(`${client.emotes.yes} **${usertag.user.username}** | You transfer ${member} **${parseInt(toGive).toLocaleString()}** coins.`);
    message.channel.send({ embeds: [sendcoinsembed3] }).catch();
    }
  }
}