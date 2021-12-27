module.exports = {
	name: "ping",
	aliases: [],
	description: "see a ping bot",
	run: async(client, message, args) => {
    message.channel.send(`**ping:** \`${client.ws.ping} ms\``)
  }
}