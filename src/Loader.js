const fs = require("fs");
const client = require("./index");
const { glob } = require("glob");
const { promisify } = require("util");

const globPromise = promisify(glob);

const eventFiles = fs.readdirSync('./src/Events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./Events/${file}`);
	console.log("[LOADED] Event - " + file)
}



let folders = fs.readdirSync(`${__dirname}/Commands`);

folders.forEach((folder) => {
	fs.readdir(`${__dirname}/Commands/${folder}`, (err, files) => {

		if (err) return console.log(`An Error Occured while Loading Commands. ${err.stack}`);

		if (!files) return console.log(`[WARN]: No Files found in "${folder.toUpperCase()}" Dir.`);

		files.forEach((file) => {

			let props = require(`./Commands/${folder}/${file}`);

			/* Name */
			if (!props || !props.name) return console.log(`[WARN]: ${file} doesn't have enough Properties.`);

			client.commands.set(props.name, props);

			/* Aliases */
			if (!props.aliases) return console.log(`[WARN]: ${file} doesn't have enough Aliases.`);

			for (let i = 0; i < props.aliases.length; i++) {
				client.aliases.set(props.aliases[i], props.name);
			};
		});
		console.log(`[LOADED]: Folder - ${folder}`);
	});
});



const commandFiles = fs.readdirSync('./src/SlashCommands').filter(file => file.endsWith('.js'));
const data = []

for (const file of commandFiles) {
  const commandfile = require(`./SlashCommands/${file}`);
  client.slashCommands.set(commandfile.name, commandfile);
  data.push({
    name: commandfile.name,
    description: commandfile.description,
    options: commandfile.options
  })
}

		/*	client.on("ready", async () => {

			client.guilds.cache.size().commands.set(data)

   

		});		*/
		


const ecoFiles = fs.readdirSync('./src/Structure/Economy')

const economy = require(`./Structure/Economy/economySystem`);
console.log(`[LOADED] Economy System Ready`)