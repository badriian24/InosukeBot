module.exports = {
	name: "resume",
	aliases: [],
	description: "resume a music",
	run: async(client, message, args) => {
		const player = message.client.manager.get(message.guild.id);
    if (!player) return message.reply("there is no player for this guild.");

    const { channel } = message.member.voice;
    
    if (!channel) return message.reply("you need to join a voice channel.");
    if (channel.id !== player.voiceChannel) return message.reply("you're not in the same voice channel.");
    if (!player.paused) return message.reply("the player is already resumed.");

    player.pause(false);
    return message.reply("resumed the player.");
  
  }
}