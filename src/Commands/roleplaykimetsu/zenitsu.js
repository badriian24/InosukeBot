module.exports = {
	name: "zenitsusay",
	aliases: [],
	description: "zenitsu say",
	usage: ['[TEXT]'],
  UserPerms: ['MANAGE_WEBHOOKS'],
	BotPerms: ['MANAGE_WEBHOOKS'],
  run: async(client, message, args) => {
		message.delete()
    const webhook = await message.channel.createWebhook('Zenitsu', {
      avatar: 'https://i.pinimg.com/736x/17/9c/b7/179cb7a5bf2c6b4d819ec7a163f02b37.jpg',
      channel: message.channel.id
    });
    await webhook.send({ content: args.join(" ") }).then(() => {
      webhook.delete();
    });
  }
}