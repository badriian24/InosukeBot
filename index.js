const {ShardingManager} = require('discord.js');

const shards = new ShardingManager("./src/index.js", {
    token: process.env.TOKEN,
    totalShards:"auto"
});
shards.on("shardCreate", shard =>{
    console.log(`[READY] ${new Date().toString().split(" ",5).join(" ")} Launched Shard #${shard.id}`);
});
shards.spawn(shards.totalShards, 10000)