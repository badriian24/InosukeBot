module.exports = {
	name: "tanjirosay",
	aliases: [],
	description: "tanjiro say",
	usage: ['[TEXT]'],
  UserPerms: ['MANAGE_WEBHOOKS'],
	BotPerms: ['MANAGE_WEBHOOKS'],
  run: async(client, message, args) => {
		message.delete()
    const webhook = await message.channel.createWebhook('Tanjiro', {
      avatar: 'https://i.pinimg.com/736x/89/b1/d4/89b1d419bf1e7a9d2df7fa55dec05d14.jpg',
      channel: message.channel.id
    });
    await webhook.send({ content: args.join(" ") }).then(() => {
      webhook.delete();
    });
  }
}