const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'soccer',
    description: 'Soccer Game',
    aliases: ['football'],
	cooldown: 10000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const positions = {
			left: '_ _\n                   🥅🥅🥅\n_ _                   🕴️\n      \n_ _                         ⚽',
			middle: '_ _\n                   🥅🥅🥅\n_ _                        🕴️\n      \n_ _                         ⚽',
			right: '_ _\n                   🥅🥅🥅\n_ _                              🕴️\n      \n_ _                         ⚽',
		};
		let randomized = Math.floor(Math.random() * Object.keys(positions).length);
		let gameEnded = false;
		let randomPos = positions[Object.keys(positions)[randomized]];

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'left',
						label: 'Left',
					},
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: 'middle',
						label: 'Middle',
					},
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'right',
						label: 'Right',
					},
				],
			},
		];

		const msg = await message.channel.send({
			content: randomPos,
			components: componentsArray,
		});
		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: randomPos,
				components: componentsArray,
			});
		}
		setInterval(() => {
			if(gameEnded == false) return update();
		}, 1000);

		const filter = button => {
			return button.user.id === message.author.id;
		};
		const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });

		if(button.customId !== Object.keys(positions)[randomized]) {
			gameEnded = true;
            let goodwords = [
                'Congratulations! I am happy for hearing it!',
                'GGs! (good game)',
                'Nice work! i know you will win!',
                'Nicee!'
            ]
			const coins = Math.floor(Math.random() * 100) + 1;
			client.giveCoins(message.author.id, coins);
			return button.reply({ embeds: [ new MessageEmbed({
                description: `You Win! and you get ${coins} coins ${goodwords[Math.floor(Math.random() * goodwords.length)]}`,
                color: `GREEN` || client.embedcolor
            }) ] });
		}
		else {
			gameEnded = true;
            let goodwords = [
                'Don\'t Worry. Loose Or Win Is Not Important. Your Harder Work Is More Important!',
                'I Am Sure You Will Win Next Time!',
                'I Am So Sorry About That. Try Best And Better Next Time!',
                'Ooh, Don\'t Worry! You Will Win As Soon As You Did It With Great Luck!'
            ]
			return button.reply({ embeds: [ new MessageEmbed({
                description: `You Loose! ${goodwords[Math.floor(Math.random() * goodwords.length)]}`,
                color: client.embedcolor
            }) ] });
		}
    },
};