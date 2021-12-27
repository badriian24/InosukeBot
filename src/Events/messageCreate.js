const client = require("../index");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");

//Loader
const guilds = require("../Database/models/guild");
const users = require(`../Database/models/users`);
const sendError = require('../Utils/Embed/error');
const sendDone = require('../Utils/Embed/success');
const config = client.config;
const prefix = client.config.prefix;
const { owners } = client.config;
const Timeout = client.Timeout;
//End Loader





client.on("messageCreate", async (message) => {

	
const dm = client.channels.cache.get("908635703313846302");
const channell = client.channels.cache.get("910157211530039326");
	
if (message.channel.type.toLowerCase() == 'dm') return dm.send(`**${message.author.tag} (${message.author.id}):** ${message.content.trim().split(/ +/g)}`);



	
	const guild = await guilds.findOne({ guildId: message.guild.id })

	 if (!guild) { await guilds.create({ guildId: message.guild.id }) }

		 const userSch = await users.findOne({userId: message.author.id})
if(!userSch) {
	users.create({userId: message.author.id})
}

	if (message.author.bot || !message.guild) return;


const prefix = client.prefix;

		const mentionRegex = RegExp(`^<@!?${client.user.id}>$`);
	if (message.content.match(mentionRegex)) {
		return message.channel.send(`Hello im **${client.user.username}** my prefix in **${message.guild.name}** is \`${prefix}\` if you can see all my command use \`${prefix}commands\``)
	}

	

	if(guild.auto_responders.length > 0) {
        guild.auto_responders.map((ar) => {
            if(ar.trigger.toLowerCase() === message.content.toLowerCase()) {
                return message.channel.send({content: ar.res})
            }
        })
    
    }
		
		
if (
		message.author.bot ||
		!message.guild || !message.content.toLowerCase().startsWith(prefix)
	)
		return;


	const [cmd, ...args] = message.content
		.slice(prefix.length)
		.trim()
		.toLocaleLowerCase()
		.split(" ");



	
	
	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));



	if (command) {
if (command.isPlaying) {
		// Check voice channel
		const channel = message.member.voice.channel;
		if (!channel) {
			return message.reply(
				'Please join a voice channel to use this command.',
			);
		}

		// Make sure the bot if in a voice channel
		if (!message.guild.me.voice.channel) {
			return message.reply('I am not currently playing music!');
		}

		// Make sure they are in the same voice channel
		if (channel.id !== message.guild.me.voice.channel.id) {
			return message.reply(
				'Please join the same voice channel as me to use this command.',
			);
		}

		// Get the server queue
		serverQueue = client.queue.get(message.guild.id);
		if (!serverQueue) return message.reply('There is nothing playing.');

		// Check if the bot is playing
		if (!serverQueue.playing) {
			return message.reply('Music is currently not playing.');
		}
	}

		
		    if(command.premium && !(await users.findOne({ premium: message.author.id })))
					return sendError('You can\'t access this commmand because this is a premium only command!', message.channel);
    
		
		if (command.Maintance) {
			if (!owners.includes(message.author.id))
				return message.channel.send(`This command is maintance please wait to fixing a command`)
		}



		if (command.ownerOnly) {
			if (!owners.includes(message.author.id))
				return message.channel.send({ content: `${client.emotes.error} • Only **coders** to use command ` })
		}

		

		if (command.voiceChannel) {
			if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} • You're not in a voice channel`);

			if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} • You are not in the same voice channel`);
		}

		if (command.guildOnly && message.channel.type.toLowerCase() == 'dm')
			return message.reply('I can only run this command inside a guild.');


		if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`You need \`${command.UserPerms || []}\` Permissions`) // 

		if (!message.guild.me.permissions.has(command.BotPerms || [])) return message.channel.send(`I need \`${command.BotPerms || []}\` Permissions`)

		if (command.cooldown) {
			if (Timeout.has(`${command.name}${message.author.id}`))
				return message.channel.send(
					`You are on a \`${ms(
						Timeout.get(`${command.name}${message.author.id}`) - Date.now(),
						{ long: true }
					)}\` cooldown.`
				);
			command.run(client, message, args);
			Timeout.set(
				`${command.name}${message.author.id}`,
				Date.now() + command.cooldown
			);
			setTimeout(() => {
				Timeout.delete(`${command.name}${message.author.id}`);
			}, command.cooldown);
		} else			
			await command.run(client, message, args)
		
		/*const pakecmd = new MessageEmbed()
			.setColor(client.embedcolor)
		.setAuthor(`${message.author.tag} Using a Command`, message.author.displayAvatarURL())
.setDescription(`ID User: \`${message.author.id}\`\n**Command Name:** ${command.name}\n**Guild:** ${message.guild.name}`)

channell.send({ embeds: [pakecmd]})*/
		}
		
   })