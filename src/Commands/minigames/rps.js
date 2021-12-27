const { RockPaperScissors } = require("weky");

module.exports = {
	name: "rps",
	aliases: ["rockpaperscrission"],
	run: async(client, message, args) => {
		const target = message.mentions.users.first() 
        if(!target) return message.channel.send('**No user specified**')
		await RockPaperScissors({
	message: message,
	opponent: message.mentions.users.first(),
	embed: {
		title: 'Rock Paper Scissors',
		description: 'Press the button below to choose your element.',
		color: client.embedcolor,
        footer: client.footer,
		timestamp: true
	},
	buttons: {
		rock: 'Rock',
		paper: 'Paper',
		scissors: 'Scissors',
		accept: 'Accept',
		deny: 'Deny',
	},
	time: 60000,
	acceptMessage:
		'<@{{challenger}}> has challenged <@{{opponent}}> for a game of Rock Paper and Scissors!',
	winMessage: 'GG, <@{{winner}}> won!',
	drawMessage: 'This game is deadlock!',
	endMessage: "<@{{opponent}}> didn't answer in time. So, I dropped the game!",
	timeEndMessage:
		"Both of you didn't pick something in time. So, I dropped the game!",
	cancelMessage:
		'<@{{opponent}}> refused to have a game of Rock Paper and Scissors with you!',
	choseMessage: 'You picked {{emoji}}',
	noChangeMessage: 'You cannot change your selection!',
	othersMessage: 'Only {{author}} can use the buttons!',
	returnWinner: false
});
	}
}