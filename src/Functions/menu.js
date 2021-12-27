const chalk = require(`chalk`);
const {
    MessageSelectMenu,
    MessageActionRow
} = require(`discord.js`);
const client = require("../index")

/* MENU CREATOR */
/**
 * @param {Array} array - The array of options (rows to select) for the select menu
 * @returns MessageSelectMenu
 */

const create_mh = (
    array
) => {

    if (!array) throw new Error(chalk.red.bold(`The options were not provided! Make sure you provide all the options!`));
    if (array.length < 0) throw new Error(chalk.red.bold(`The array has to have atleast one thing to select!`));
    let select_menu;

    let id = `help-menus`;

    let menus = [];

    const emo = {
        interaction: client.emotes.exclamation,
				bot: client.emotes.bot,
				dev: client.emotes.exclamation,
				economy: client.emotes.coin,
				fun: client.emotes.fun,
				image: client.emotes.camera,
				info: client.emotes.info,
				minigames: client.emotes.games,
				moderation: client.emotes.mod,
				music: client.emotes.music,
				settings: client.emotes.settings,
				utility: client.emotes.utils,
			  autoresponders: client.emotes.autoresponder,
			  rpg: client.emotes.rpg,
			antiraid: client.emotes.skull,
			leveling: client.emotes.level,
			roleplaykimetsu: client.emotes.autoreponder,
			nsfw: '🔞',
			backup: client.emotes.skull
    }

    // now lets run it
    array.forEach(cca => {
        let name = cca;
        let sName = `${name.toUpperCase()}`
        let tName = name.toLowerCase();
        let fName = name.toUpperCase();

			
    

        return menus.push({
            label: tName,
					emoji: emo[tName],
            description: `click to see ${tName}`,
            value: fName
        })
    });   
let chicken = new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(`Choose`)
        .addOptions(menus)

    select_menu = new MessageActionRow()
        .addComponents(
            chicken
        );


    return {
        smenu: [select_menu],
        sid: id
    }
}

module.exports = create_mh;