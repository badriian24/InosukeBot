module.exports = {
	name: "loop",
	aliases: [],
	description: "loop a music",
	run: async(client, message, args) => {
    const player = client.manager.players.get(message.guild.id);
    if (player.queueRepeat) {
      player.setQueueRepeat(false);
      message.channel.send("Player is no longer on repeat.");
    } else {
      player.setQueueRepeat(true);
      message.channel.send("🔄 **| Player is now on repeat.**");
		}
  }
}