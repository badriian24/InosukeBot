const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "hentai",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply({ content: client.emotes.error + "This is not an NSFW Channel" })
      
      }
      
  

        async function work() {
        let owo = (await neko.nsfw.hentai());

        const hentai = new Discord.MessageEmbed()
        .setTitle("Hentai")
        .setImage(owo.url)
        .setColor(`#2f3136`)
        .setURL(owo.url);
        message.channel.send({ embeds: [hentai] });

}

      work();
}
                };