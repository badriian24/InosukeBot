

const { default: chalk } = require("chalk");
const { table } = require("table");
const client = require("../index");

client.on("ready", () => {
  const data = [
    ["LOGGED IN AS", `${client.user.tag}`, "The bot that I am logged in as."],
    ["SERVERS", `${client.guilds.cache.size.toLocaleString()}`, "The amount of servers that I am in."],
    ["USERS", `${client.users.cache.size.toLocaleString()}`, "The amount of users using my commands."],
    ["PREFIX", `${client.config.prefix}`, "The prefix to use to run my commands"],
    ["COMMANDS", `${client.commands.size.toLocaleString()}`, "Commands Loaded"]
  ]
  const activites = [
        {name: `i!help | ${client.guilds.cache.size} servers!`, type: "WATCHING"},
        {name: `i!help | ${client.users.cache.size} users!`, type: "LISTENING"},
        {name: `Fight Me!`, type: "PLAYING"},
    ]
    let activity = 0
    client.user.setPresence({status: "dnd", activity: activites[0]})
    setInterval(() => {
        if(activity === activity.length) return activity = 0;
        activity++
        client.user.setActivity(activites[Math.floor(Math.random() * activites.length)])
    }, 1000 * 35);
  
  const config = {
    border: {
      topBody: `─`,
      topJoin: `┬`,
      topLeft: `┌`,
      topRight: `┐`,
  
      bottomBody: `─`,
      bottomJoin: `┴`,
      bottomLeft: `└`,
      bottomRight: `┘`,
  
      bodyLeft: `│`,
      bodyRight: `│`,
      bodyJoin: `│`,
  
      joinBody: `─`,
      joinLeft: `├`,
      joinRight: `┤`,
      joinJoin: `┼`
    }, 
    header: {
      alignment: 'center',
      content: "CLIENT DATA"
    }
  };
  console.log(table(data, config))
}); 