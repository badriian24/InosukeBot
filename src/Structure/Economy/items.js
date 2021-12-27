const hd = '<:diamond:909392183575072768>'
const hr = '<:ruby:909392651789402132>'
const hg = '<:gade:909393908671344661>'
const ha = '<:amethyst:909393192435212369>'
const hp = '<:precious:909395695709081660>'

const array = [{
	name: 'banknote',
    description: `📜 **Bank Note** \nmore bank space.`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10667,
    price: 10000,
    keep: false,
    run: async (client, message, args) => {
        const random = Math.ceil((Math.random() * 5000) + 5000);
        const e = await client.giveBankSpace(message.author.id, random);
        message.channel.send(`You redeemed a banknote, which increases your bank space by **${random.toLocaleString()}**. You now have **${e.bankSpace.toLocaleString()}** bank space.`);
    }
},
{
    name: 'padlock',
    description: 'Secure your wallet from those sneaky robbers',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2000,
    price: 10000,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'Cookie',
    description: 'A tasty snack.',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    price: 50,
    keep: false,
    run: async (client, message, args) => {
        const cookieRandom = [
            'You ate a cookie as you was feeling hungry.',
            'You choked on a cookie and almost died.',
            'The cookie tasted great.'
        ];
        const yes = cookieRandom[Math.floor(Math.random() * cookieRandom.length)];
        message.channel.send(`${yes}`);
    }
},
{
    name: 'fishingrod',
    description: 'Catchs fish ',
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 15000,
    keep: true,
    run: async (client, message, args) => {
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await client.fetchUser(message.author.id);
        message.channel.send(`You went fishing and came back with **${fishAmount}** fish 🐟`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'fish');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'fish');
        if (findItem) {
            userInv.push({ name: 'fish', amount: (findItem.amount + fishAmount), description: 'Sell the fish to make money.' });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'fish', amount: fishAmount, description: 'Sell the fish to make money.' });
            data.items = userInv;
            await data.save();
        }
    }
},
{
    name: 'fish',
    description: 'Sell fish to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 125,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'sword',
    description: `🗡 **sword**\nuse this to kills animals`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 2500,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
		name: 'car',
		description: `🚖 **Car** \ndriver and make a coins.`,
		canUse: false,
    canBuy: true,
    sellAmount: 15000,
    price: 20000,
    keep: true,
		run: async (client, message, args) => {
			
	  }
},
{
    name: 'deer',
    description: '🦌 **Deer**\nsell deer to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 5000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'bear',
    description: '🐻 **Bear**\nsell bear to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 6000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'duck',
    description: '🦆 **Duck**\nsell duck to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 2500,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'pig',
    description: '🐷 **Pig**\nsell pig to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 8000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'cow',
    description: '🐮 **Cow**\nsell cow to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 12000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'fox',
    description: '🦊 **Fox**\nsell fox to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 10000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'rabbit',
    description: '🐰 **Rabbit**\nsell rabbit to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 3000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'chicken',
    description: '🐔 **Chicken**\nsell chicken to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 5000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'boar',
    description: '🐗 **Boar**\nsell boar to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 1000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'pickaxe',
    description: `⛏️ **Pickaxe**\nuse this to mine gems`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 25000,
    price: 30000,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'gem',
    description: '💎 **Gem**\nsell gems to make money.',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 1000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'diamond',
    description: `${hd} **Diamond Gem** \nsell the diamond to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 20000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'ruby',
    description: `${hr} **Ruby Gem** \nsell the ruby to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 22500,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'gade',
    description: `${hg} **Gade Gem** \nsell the gade to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 30000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'amethyst',
    description: `${ha} **Amethyst Gem** \nsell the amethyst to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 35000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'precious',
    description: `${hp} **Precious Gem** \nsell the precious to make money.`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 50000,
    price: 0,
    keep: true,
    run: async (client, message, args) => {

    }
},
{
    name: 'luckyclover',
    description: 'Increase your chances of successful robbery',
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 4000,
    price: 10000,
    keep: false,
    run: async (client, message, args) => {

    }
}
];

module.exports = array;