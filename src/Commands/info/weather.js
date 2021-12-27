const weather = require('weather-js');

const discord = require('discord.js')

//TIME TO END STREAM

module.exports = {

  name: "weather",
  aliases: [],
  description: "Get the weather of anywhere",

  category: "info",

  usage: "weathet <>",

  run: (client, message, args) => {

    

    

    if(!args.length) {

      return message.channel.send("Please give the weather location")

    }

    

 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {

try {

 

let embed = new discord.MessageEmbed()

.setTitle(`Weather - ${result[0].location.name}`)

.setColor(client.embedcolor)

.setDescription("Temperature units can may be differ some time")

.addField("Temperature", `${result[0].current.temperature} Celcius`, true)

.addField("Sky Text", result[0].current.skytext, true)

.addField("Humidity", result[0].current.humidity, true)

.addField("Wind Speed", result[0].current.windspeed, true)//What about image

.addField("Observation Time", result[0].current.observationtime, true)

.addField("Wind Display", result[0].current.winddisplay, true)

.setThumbnail(result[0].current.imageUrl)

.setTimestamp()

.setFooter(client.footer)

   message.channel.send({ embeds: [embed] })
} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")

}

});   
  }
}