const { MessageEmbed } = require("discord.js");
const itemss = require('../../Structure/Economy/items');

module.exports = {
	name: "drive",
	aliases: [],
	cooldown: 0,
	description: "work for driver",
	run: async (client, message, args) => {
		let user = await client.fetchUser(message.author.id);

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


		const item = itemss.find(x => x.name.toLowerCase() === 'car');
		let founditem = user.items.find(x => x.name.toLowerCase() === 'car');
		let array = [];
		array = user.items.filter(x => x.name !== 'car');
		if (!founditem) {
			let use3embed = new MessageEmbed()
				.setColor("RED")
				.setDescription(`${client.emotes.error} | You dont have a car, please buy a car`);
			return message.channel.send({ embeds: [use3embed] });
			//////return message.channel.send("you don't have this item");
		}
		/*
		const findItem = data.items.find(i => i.name.toLowerCase() == 'rifle');
					let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rifle');
			if (!userInv < 1) {
			  
								let use2embed = new MessageEmbed()
								.setColor("RED")
								.setDescription(`${x} **${member.user.username}** : You dont have this item make sure you have typed the correct \`id\`.`);
								return message.channel.send(use2embed);
			}
	*/



		const distanse = [
			"5",
			"6",
			"7",
			"8"
			]

		const response = distanse[Math.floor((Math.random() * distanse.length))];

		const userData = await client.fetchUser(message.author.id);
		

		if (response == '5') {
			const coins = Math.floor(Math.random() * 10000) + 1;
		  const msg = message.channel.send(`${client.emotes.loading}** | Working ...**`)
			.then(msg => {
				setTimeout(function() {
					msg.edit({
						content: `${client.emotes.drive} | **${message.author.tag},** you drive with distance 5 Km\n${client.emotes.blank} | You get ${client.emotes.coin} **${coins} Coins**`
					})
				}, 3000);

			});
		  client.giveCoins(message.author.id, coins);
		} else if (response == '6') {
			const coins = Math.floor(Math.random() * 15000) + 1;
		  const msg = message.channel.send(`${client.emotes.loading}** | Working ...**`)
			.then(msg => {
				setTimeout(function() {
					msg.edit({
						content: `${client.emotes.drive} | **${message.author.tag},** you drive with distance 6 Km\n${client.emotes.blank} | You get ${client.emotes.coin} **${coins} Coins**`
					})
				}, 3000);

			});
		  client.giveCoins(message.author.id, coins);
		} else if (response == '7') {
			const coins = Math.floor(Math.random() * 20000) + 1;
		  const msg = message.channel.send(`${client.emotes.loading}** | Working ...**`)
			.then(msg => {
				setTimeout(function() {
					msg.edit({
						content: `${client.emotes.drive} | **${message.author.tag},** you drive with distance **7 Km**\n${client.emotes.blank} | You get ${client.emotes.coin} **${coins} Coins**`
					})
				}, 3000);

			});
		  client.giveCoins(message.author.id, coins);
		} else if (response == '8') {
			const coins = Math.floor(Math.random() * 25000) + 1;
		  const msg = message.channel.send(`${client.emotes.loading}** | Working ...**`)
			.then(msg => {
				setTimeout(function() {
					msg.edit({
						content: `${client.emotes.drive} | **${message.author.tag},** you drive with distance 8 Km\n${client.emotes.blank} | You get ${client.emotes.coin} **${coins} Coins**`
					})
				}, 3000);

			});
		  client.giveCoins(message.author.id, coins);
		}
	}
}




/*

const { Client, Message, MessageEmbed } = require('discord.js');
const itemss = require('../../structure/works');

module.exports = {
	name: 'work',
	cooldown: 60000,
	description: 'working and get your money',
	run: async (client, message, args) => {
		let user = await client.fetchUser(message.author.id);
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


		const item = itemss.find(x => x.name.toLowerCase() === 'driver');
		let founditem = user.items.find(x => x.name.toLowerCase() === 'driver');
		let array = [];
		array = user.items.filter(x => x.name !== 'driver');
		if (!founditem) {
			let use3embed = new MessageEmbed()
				.setColor("RED")
				.setDescription(`${client.emotes.error} **${member.user.username}**  | You don't own a \`SWORD\`, you need to buy one to use this command.`);
			return message.channel.send({ embeds: [use3embed] });
			//////return message.channel.send("you don't have this item");
		}

		
	}
}
*/