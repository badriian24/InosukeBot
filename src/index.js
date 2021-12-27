const { Client, Collection, Intents } = require("discord.js");
const config = require("./Client/Configs/config");
const emotes = require("./Client/Emotes");
const { SlashCreator, GatewayServer } = require('slash-create');
const path = require('path');


const client = new Client({
	intents: 32767,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	allowedMentions: {repliedUser: true},
})

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
client.Timeout = new Collection();
client.config = config;
client.embedcolor = config.embedcolor;
client.emotes = emotes;
client.prefix = config.prefix;
client.footer = config.footer;

require("./Loader");
require("./Structure/Giveaway");
require("./Structure/Music");
require("./Structure/Database")
require("./Structure/Website");


client.login(config.token)
