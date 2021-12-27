module.exports = {
	name: 'inosukesay',
	aliases: [],
	description: 'inosuke say',
	usage: ['[TEXT]'],
	UserPerms: ['MANAGE_WEBHOOKS'],
	BotPerms: ['MANAGE_WEBHOOKS'],
	run: async (client, message, args) => {
		message.delete();
		const webhook = await message.channel.createWebhook('Inosuke', {
			avatar:
				'https://i.pinimg.com/736x/de/bb/a4/debba4e9baf192282d5da72e4aab713c.jpg',
			channel: message.channel.id
		});
		await webhook.send({ content: args.join(' ') }).then(() => {
			webhook.delete();
		});
	}
};
