const { Snake } = require("weky");

module.exports = {
	name: "snake",
aliases: ["snek"],
	run: async(client, message, args) => {
		await Snake({
	message: message,
	embed: {
		title: 'Snake',
		description: 'you scored **{{score}}** points!',
		color: client.embedcolor,
        footer: client.footer,
		timestamp: true
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel'
});
	}
}