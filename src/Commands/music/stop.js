module.exports = {
	name: 'stop',
	aliases: ["dc", "leave"],
  description: 'stop a music',
  run: async(client, message, args) => {
		const player = message.client.manager.get(message.guild.id);
    if (!player) return message.reply(client.emotes.error + " there is no player for this guild.");

    const { channel } = message.member.voice;
    
    if (!channel) return message.reply(clienr.emotes.error + " you need to join a voice channel.");
    if (channel.id !== player.voiceChannel) return message.reply(client.emotes.error + " you're not in the same voice channel.");
    
    player.destroy();
    return message.reply(client.emotes.yes + " destroyed the player.");
  
	}
}