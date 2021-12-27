const client = require("../../index");
const { MessageEmbed } = require("discord.js");

module.exports = async (text, channel) => {
  channel.send({ content:`${client.emotes.error} **|** ${text}` });
};