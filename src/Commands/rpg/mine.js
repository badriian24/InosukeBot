const { MessageEmbed } = require("discord.js");
const itemss = require('../../Structure/Economy/items');
const hd = '<:diamond:909392183575072768>'
const hr = '<:ruby:909392651789402132>'
const hg = '<:gade:909393908671344661>'
const ha = '<:amethyst:909393192435212369>'
const hp = '<:precious:909395695709081660>'

module.exports = {
	name: "mine",
	aliases: ["mining"],
	cooldown: 30000,
	description: "use your pickaxe to find games.",
	run: async (client, message, args) => {
		let user = await client.fetchUser(message.author.id);
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


		const item = itemss.find(x => x.name.toLowerCase() === 'pickaxe');
		let founditem = user.items.find(x => x.name.toLowerCase() === 'pickaxe');
		let array = [];
		array = user.items.filter(x => x.name !== 'pickaxe');
		if (!founditem) {
			let use3embed = new MessageEmbed()
				.setColor("RED")
				.setDescription(`${client.emotes.error} **${member.user.username}** : You don't own a \`PICKAXE\`, you need to buy one to use this command.`);
			return message.channel.send({ embeds: [use3embed] });
			//////return message.channel.send("you don't have this item");
		}



		const randomMessage = [
			'd', 'd', 'd', 'd', 'd',
			'r', 'r', 'r', 'r',
			'g', 'g', 'g',
			'a', 'a',
			'p',
			'missed', 'missed', 'missed', 'missed'
		];

		const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];

		const userData = await client.fetchUser(message.author.id);

		if (response == 'd') {

			const Amount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const Embeddiamond = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}** | You went mining and came back with **${Amount}** x Diamond Gem ${hd}.`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [Embeddiamond] });
			const findItem = data.items.find(i => i.name.toLowerCase() == 'diamond');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'diamond');
			if (findItem) {
				userInv.push({ name: 'diamond', amount: (findItem.amount + Amount), description: `${hd} **Diamond Gem** \nsell the diamond to make money.` });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'diamond', amount: Amount, description: `${hd} **Diamond Gem** \nsell the diamond to make money.` });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'r') {
			const Amount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const Embedruby = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}** | YouYou went mining and came back with **${Amount}** x Ruby Gem ${hr}.`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [Embedruby] });
			const findItem = data.items.find(i => i.name.toLowerCase() == 'ruby');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ruby');
			if (findItem) {
				userInv.push({ name: 'ruby', amount: (findItem.amount + Amount), description: `${hr} **Ruby Gem** \nsell the ruby to make money.` });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'ruby', amount: Amount, description: `${hr} **Ruby Gem** \nsell the ruby to make money.` });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'g') {

			const Amount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const Embedgade = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}** | YouYou went mining and came back with **${Amount}** x Gade Gem ${hg}.`)
				.setColor(client.emobedcolor)
			message.channel.send({ embeds: [Embedgade] });
			const findItem = data.items.find(i => i.name.toLowerCase() == 'gade');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'gade');
			if (findItem) {
				userInv.push({ name: 'gade', amount: (findItem.amount + Amount), description: `${hg} **Gade Gem** \nsell the gade to make money.` });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'gade', amount: Amount, description: `${hg} **Gade Gem** \nsell the gade to make money.` });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'a') {

			const Amount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const Embedveryrare = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}**  | You went mining and came back with **${Amount}** x Amethyst Gem ${ha}.`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [Embedveryrare] });
			const findItem = data.items.find(i => i.name.toLowerCase() == 'amethyst');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'amethyst');
			if (findItem) {
				userInv.push({ name: 'amethyst', amount: (findItem.amount + Amount), description: `${ha} **Amethyst Gem** \nsell the amethyst to make money.` });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'amethyst', amount: Amount, description: `${ha} **Amethyst Gem** \nsell the amethyst to make money.` });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'p') {

			const Amount = Math.round(Math.random() * 1) + 1;
			const data = await client.fetchUser(message.author.id);
			const Embedled = new MessageEmbed()
				.setDescription(`${client.emotes.yes} **${member.user.username}** | You went fishing and came back with **${Amount}** x Precious Gem ${hp}.`)
				.setColor(client.embedcolor)
			message.channel.send({ embeds: [Embedled] });
			const findItem = data.items.find(i => i.name.toLowerCase() == 'precious');
			let userInv = data.items.filter(i => i.name.toLowerCase() !== 'precious');
			if (findItem) {
				userInv.push({ name: 'precious', amount: (findItem.amount + Amount), description: `${hp} **Precious Gem** \nsell the precious to make money.` });
				data.items = userInv;
				await data.save();
			} else {
				userInv.push({ name: 'precious', amount: Amount, description: `${hp} **Precious Gem** \nsell the precious to make money.` });
				data.items = userInv;
				await data.save();
			}
		} else if (response == 'missed') {
			const Embedmissed = new MessageEmbed()
				.setDescription(`${client.emotes.error} **${member.user.username}**  | You went mining, and found 0 gems.`)
				.setColor("RED")
			message.channel.send({ embeds: [Embedmissed] });
		}
	}
}