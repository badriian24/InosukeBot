const client = require("../../index");
const { Client } = require("discord.js");
const economy = require("../../Database/models/economy");


client.fetchUser = async(userId) => {
	const someone = client.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        const user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: []
            });
            newUser.save();
            return newUser;
        }
        return user;
}

client.giveBankSpace = async(userId, amount) => {
    const someone = client.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: []
            });
            newUser.save();
            return newUser;
        }
        user.bankSpace += parseInt(amount);
        await user.save();
        return user;
}



client.createUser = async(userId) => {
    const someone = client.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        const user = await economy.findOne({ userId: userId });
        if (!user) return false;
        const newUser = new economy({
            userId: userId,
            items: []
        });
        newUser.save();
        return newUser;
}

client.giveCoins = async(userId, amount) => {
	const someone = client.users.cache.get(userId);
        if (!someone || someone.bot) return false;
        let user = await economy.findOne({ userId: userId });
        if (!user) {
            const newUser = new economy({
                userId: userId,
                items: [],
                coinsInWallet: parseInt(amount)
            });
            newUser.save();
            return newUser;
        }
        user.coinsInWallet += parseInt(amount);
        await user.save();
        return user;
    
}