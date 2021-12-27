const { MessageEmbed } = require("discord.js");
const itemss = require('../../Structure/Economy/items');

module.exports = {
	name: "hunt",
	aliases: ["h"],
	cooldown: 13000,
	description: "hunt a animals",
	run: async (client, message, args) => {
		let user = await client.fetchUser(message.author.id);

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


		const item = itemss.find(x => x.name.toLowerCase() === 'sword');
		let founditem = user.items.find(x => x.name.toLowerCase() === 'sword');
		let array = [];
		array = user.items.filter(x => x.name !== 'sword');
		if (!founditem) {
			let use3embed = new MessageEmbed()
				.setColor("RED")
				.setDescription(`${client.emotes.error} **${member.user.username}**  | You don't own a \`SWORD\`, you need to buy one to use this command.`);
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



		const randomMessage = [
			'bear',
			'deer',
			'duck',
			'pig',
			'cow',
			'fox',
			'rabbit',
			'chicken',
			'boar',
			'devil',
			'missed'
		];

		const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];

		const userData = await client.fetchUser(message.author.id);

		if (response == 'bear') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedBear = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}** : You went hunting and came back with **${deerAmount}** x Bear 🐻`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedBear] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Bear 🐻`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'bear');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'bear');
			if (findItem) {
				userInv.push({ name: 'bear', amount: (findItem.amount + deerAmount), description: '🐻 **Bare**\nsell bear to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'bear', amount: deerAmount, description: '🐻 **Bare**\nsell bear to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'deer') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedDeer = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Deer 🦌`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedDeer] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Deer 🦌`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'deer');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'deer');
			if (findItem) {
				userInv.push({ name: 'deer', amount: (findItem.amount + deerAmount), description: '🦌 **Deer**\nsell deer to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'deer', amount: deerAmount, description: '🦌 **Deer**\nsell the deer to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'duck') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedDuck = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Duck 🦆`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedDuck] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Duck 🦆`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'duck');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'duck');
			if (findItem) {
				userInv.push({ name: 'duck', amount: (findItem.amount + deerAmount), description: '🦆 **Duck**\nsell duck to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'duck', amount: deerAmount, description: '🦆 **Duck**\nsell the duck to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'pig') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedPig = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}** |  You went hunting and came back with **${deerAmount}** x Pig 🐷`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedPig] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Pig 🐷`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'pig');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'pig');
			if (findItem) {
				userInv.push({ name: 'pig', amount: (findItem.amount + deerAmount), description: '🐷 **Pig**\nsell pig to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'pig', amount: deerAmount, description: '🐷 **Pig**\nsell the pig to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'cow') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedCow = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Cow 🐮`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedCow] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Cow 🐮`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'cow');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'cow');
			if (findItem) {
				userInv.push({ name: 'cow', amount: (findItem.amount + deerAmount), description: '🐮 **Cow**\nsell cow to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'cow', amount: deerAmount, description: '🐮 **Cow**\nsell the cow to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'fox') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedFox = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Fox 🦊`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedFox] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Fox 🦊`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'fox');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'fox');
			if (findItem) {
				userInv.push({ name: 'fox', amount: (findItem.amount + deerAmount), description: '🦊 **Fox**\nsell fox to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'fox', amount: deerAmount, description: '🦊 **Fox**\nsell the fox to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'rabbit') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedRabbit = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Rabbit 🐰`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedRabbit] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Rabbit 🐰`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'rabbit');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rabbit');
			if (findItem) {
				userInv.push({ name: 'rabbit', amount: (findItem.amount + deerAmount), description: '🐰 **Rabbit**\nsell rabbit to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'rabbit', amount: deerAmount, description: '🐰 **Rabbit**\nsell the rabbit to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'chicken') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedChicken = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Chicken 🐔`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedChicken] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Chicken 🐔`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'chicken');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'chicken');
			if (findItem) {
				userInv.push({ name: 'chicken', amount: (findItem.amount + deerAmount), description: '🐔 **Chicken**\nsell chicken to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'chicken', amount: deerAmount, description: '🐔 **Chicken**\nsell the chicken to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'boar') {
			const deerAmount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const EmbedBoar = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went hunting and came back with **${deerAmount}** x Boar 🐗`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [EmbedBoar] });
			//message.channel.send(`You went hunting and came back with **${deerAmount}** x Boar 🐗`);
			const findItem = data.items.find(i => i.name.toLowerCase() == 'boar');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'boar');
			if (findItem) {
				userInv.push({ name: 'boar', amount: (findItem.amount + deerAmount), description: '🐗 **Boar**\nsell boar to make money.' });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'boar', amount: deerAmount, description: '🐗 **Boar**\nsell the boar to make money.' });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'missed') {
			const Embedmissed = new MessageEmbed()
				.setDescription(`${client.emotes.error} **${member.user.username}** | You went hunting, and seen 0 animals.`)
				.setColor("RED")
			message.channel.send({ embeds: [Embedmissed] });
		}
	}
}