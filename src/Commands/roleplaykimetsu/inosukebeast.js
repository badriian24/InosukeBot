module.exports = {
	name: "inosukebeastsay",
	aliases: [],
	description: "inosuke say",
	usage: ['[TEXT]'],
  UserPerms: ['MANAGE_WEBHOOKS'],
	BotPerms: ['MANAGE_WEBHOOKS'],
  run: async(client, message, args) => {
		message.delete()
    const webhook = await message.channel.createWebhook('Inosuke', {
      avatar: 'https://i.pinimg.com/736x/22/00/c2/2200c2140de84cd8328b372e465e7ce8.jpg',
      channel: message.channel.id
    });
    await webhook.send({ content: args.join(" ") }).then(() => {
      webhook.delete();
    });
  }
}