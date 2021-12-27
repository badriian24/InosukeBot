module.exports = {
	name: 'skip',
	aliases: ["s"],
  description: 'skip a music',
  run: async(client, message, args) => {
		const player = message.client.manager.get(message.guild.id);
      if (!player) return message.reply(client.emotes.error + " " + "**there is no player for this guild.**");
  
      const { channel } = message.member.voice;
      if (!channel) return message.reply(client.emotes.error + " **you need to join a voice channel.**");
      if (channel.id !== player.voiceChannel) return message.reply(client.emotes.error + " **you're not in the same voice channel.**");

      if (!player.queue.current) return message.reply(client.emotes.error + " " + "**there is no music playing.**")

      const { title } = player.queue.current;

      player.stop();
      return message.reply(`${title} was skipped.`)
    
	}
}