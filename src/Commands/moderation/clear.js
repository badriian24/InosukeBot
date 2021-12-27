module.exports = {
  name: "clear",
  aliases: ["purge", "clearmsgs", "clean", "clear"],
  category: "moderation",
  UserPerms: ["MANAGE_MESSAGES"],
  BotPerms: ["MANAGE_MESSAGES"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
Mainitance: true,
  run: async (client, message, args) => {
    //Start
		message.delete()
    
    if (!args[0])
      return message.channel.send(`${client.emotes.error} **Please Give Me Number Of Messages!**`);

    if (isNaN(args[0]))
      return message.channel.send(`${client.emotes.error} **Please Rate Me Number!**`);


    if (args[0] > 99)
      return message.channel.send(
        `${client.emotes.error} **I do not clear ${args[0]} Messages Because the Limit on Discord Tos is 100!**`
      );


    message.channel.bulkDelete(args[0]).then(Message => {
      return message.channel.send(`${client.emotes.yes} **Cleared ${Message.size} messages!**`).then(Message =>{
        setTimeout(function(){
            Message.delete()
            .catch()
        }, 5000)
    }
    )
    })
}
}