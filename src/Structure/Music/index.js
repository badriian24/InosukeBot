const client = require("../../index");
const { Manager } = require("erela.js");

client.manager = new Manager({
  // Pass an array of node. Note: You do not need to pass any if you are using the default values (ones shown below).
  nodes: [
    // If you pass a object like so the "host" property is required
    {
      host: "lava.devin-dev.xyz", // Optional if Lavalink is local
      port: 3888, // Optional if Lavalink is set to default
      password: "ayraiscute", // Optional if Lavalink is set to default
			secure: false,
    },
  ],
  // A send method to send data to the Discord WebSocket using your library.
  // Getting the shard for the guild and sending the data to the WebSocket.
  send(id, payload) {
    const guild = client.guilds.cache.get(id);
    if (guild) guild.shard.send(payload);
  },
})
  .on("nodeConnect", node => console.log(`[CONNECTED] Node ${node.options.identifier} connected`))
  .on("nodeError", (node, error) => console.log(`[ERROR] Node ${node.options.identifier} had an error: ${error.message}`))
  .on("trackStart", (player, track) => {
    client.channels.cache
      .get(player.textChannel)
      .send(`Now playing: ${track.title}`);
  })
  .on("queueEnd", (player) => {
    client.channels.cache
      .get(player.textChannel)
      .send("Queue has ended.");

    player.destroy();
  });

client.once("ready", () => {
  console.log("[READY] Erela package ready!");
  // Initiate the manager.
  client.manager.init(client.user.id);
});

// Here we send voice data to lavalink whenever the bot joins a voice channel to play audio in the channel.
client.on("raw", (d) => client.manager.updateVoiceState(d));