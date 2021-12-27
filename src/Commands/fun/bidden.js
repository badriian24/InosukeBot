const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "bidden",
    description: "tweet something on twitter!",
    aliases: [],
    category: "fun",
    usage: "tweet <txt>",
    run: async(client, message, args) => {

      if(!args[0]) return message.reply({content: `Please text something to tweet!`})

        
            let embed = new MessageEmbed()
            .setAuthor("Tweeted!", "https://cdn.discordapp.com/emojis/861863654097682452.png?v=1")
            .setImage(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(" ")}`)
            .setColor('BLUE')
            .setTimestamp()
            message.channel.send({embeds: [embed]})
            message.react("<:icons_twitter:900034886444908555>")
        
    }
} 