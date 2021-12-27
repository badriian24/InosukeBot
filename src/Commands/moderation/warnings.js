const warnModel = require("../../Database/models/users");
const { Client, Message, MessageEmbed } = require("discord.js");
const sendError = require("../../Utils/Embed/error");
const sendDone = require("../../Utils/Embed/success"),
  moment = require("moment");

module.exports = {
  name: "warnings",
	aliases: ["check-warn"],
  description: "Look user's warnings or yours.",
  usage: "[USER]",
  cooldown: 5000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user)
      return message.channel
        .send({ content: "Please enter a valid member!" })
        .then((msg) =>
          setTimeout(() => msg.delete() && message.delete(), 5000)
        );
    const userWarnings = await warnModel.find({
      userId: user.id,
      guildId: message.guildId,
    });
    if (!userWarnings?.length)
      return message.channel.send({ content: "This user have no warning." });
    const embedDescription = userWarnings
      .map((warn) => {
        const moderator = message.guild.members.cache.get(warn.moderatorId);
        return [
          `WarnID: ${warn._id}`,
          `Moderator: ${moderator || "Has Left The Server"}`,
          `Date: <t:${warn.timestamp}:f>`,
          `Reason: ${warn.reason}`,
        ].join("\n");
      })
      .join("\n\n");
    let usred;
    if (user.user.tag.length > 20) {
      usred = `${user.user.username.slice(0, 20)}#${user.user.discriminator}`;
    } else {
      usred = `${user.user.tag}`;
    }
    const embed = new MessageEmbed()
      .setAuthor(`${usred}'s warning(s)`)
      .setDescription(embedDescription)
      .setColor(client.embedcolor);
    message.channel.send({ embeds: [embed] });
  },
};