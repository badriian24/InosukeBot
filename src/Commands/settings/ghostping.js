const Schema = require("../../Database/models/guild");

module.exports = {
  name: "ghostping",
  description: "Enable/Disable Anti Ghost Ping",
  aliases: ["gp"],
  cooldown: 5000,
  usage: "[ENABLE/DISABLE]",
  UserPerms: ['MANAGE_GUILD'],
	Maintance: true,
  run: async (client, message, args) => {
		options = ["enable", "disable"];

    if (!args.length)
      return message.reply(client.emotes.error + "Please enter either **enable** or **disable**");
    const opt = args[0].toLowerCase();
    if (!opt)
			return message.reply(`${client.emotes.error} Please enter either **enable** or **disable**`)

		if (opt == "enable") {
      Schema.findOne({ guildId: message.guild.id }, async (err, data) => {
        if (data)
          return message.reply(`${client.emotes.error} **Anti Ghost Ping** Module is enabled already`);
        new Schema({
          guildId: message.guild.id,
        }).save();
        message.reply(`${client.emotes.yes} **Anti Ghost-Ping** has been enabled.`);
      });
    }

		if (opt == "disable") {
      Schema.findOne({ guildId: message.guild.id }, async (err, data) => {
        if (!data)
          return message.reply(`${client.emotes.error} **Anti Ghost Ping** is disabled already`);
        data.delete();
        message.reply(`${client.emotes.yes} **Anti Ghost Ping** has been disabled.`);
      });
    }
	},
};