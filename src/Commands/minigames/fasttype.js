const { FastType } = require("weky");
const sentence = [
	"kamu udah cantik kok",
	"can you hit me?",
	"you heal me!",
	"Inosuke bot discord",
  "ahh"
	
]
module.exports = {
	name: "fasttype",
	aliases: [],
	description: "minagames fasttype",
	run: async(client, message, args) => {
		await FastType({
    message: message,
    embed: {
        title: 'FastType',
        description: 'You have **{{time}}** to type the below sentence.',
        color: client.embedcolor,
        footer: client.footer,
        timestamp: true
    },
    sentence: sentence[Math.floor(Math.random() * sentence.length)],
    winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    cancelMessage: 'You ended the game!',
    time: 60000,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});
	}
}