const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "meme",
    category: "fun",
	aliases: [],
    description: "Send A Meme!",
    usage: "Meme",
    run: async (client, message, args) => {

        //Start

        const Reds = [
            "memes",
            "me_irl",
            "dankmemes",
            "comedyheaven",
            "Animemes"
        ];

        const Rads = Reds[Math.floor(Math.random() * Reds.length)];

        const res = await fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return message.channel.send(`Your Life Lmfao`);

        const data = json[0].data.children[0].data;

        const Embed = new MessageEmbed()
            .setColor(client.embedcolor)
            .setURL(`https://reddit.com${data.permalink}`)
            .setTitle(data.title)
            .setDescription(`Author : ${data.author}`)
            .setImage(data.url)
            .setFooter(`${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments || 0} 💬`)
            .setTimestamp();

        return message.channel.send({ embeds: [Embed] });

        //End

    }
};