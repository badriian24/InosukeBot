const ms = require('ms');
module.exports = {
	name: "end",
	aliases: [],
	description: "end a giveaways",
	run: async (client, message, args) => {
		if(!message.member.permissions.has('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.reply(':x: You need to have the manage messages permissions to reroll giveaways.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.reply(':x: You have to specify a valid message ID!');
    }

client.giveawaysManager.end(args[0])
    // Success message
    .then(() => {
        // Success message
        message.reply('Giveaway Ended.');
    }).catch((e) => {
            message.reply({
                content: e
            });
    })
	}
}