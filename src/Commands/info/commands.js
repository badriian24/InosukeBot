const { Client, MessageButton, MessageEmbed, Message, MessageActionRow, MessageSelectMenu, MessageMenuOption, Interaction, } = require("discord.js");
const {
    readdirSync
} = require("fs");
const fs = require("fs");
const users = require("../../Database/models/users");
const create_mh = require(`../../Functions/menu.js`);

module.exports = {
	name: "commands",
	aliases: ["command", "cmd"],
	run: async (client, message, args) => {
const userSch = await users.findOne({userId: message.author.id})
if(!userSch) {
	users.create({userId: message.author.id})
}
		const prefix = client.prefix;

let categories = [];
        let cots = [];
		
		if (!args.length) {

//categories to ignore
            let ignored = [
                "test"
            ];

            const emo = {

                info: client.emotes.info,
                Interaction: client.emotes.exclamation,
                utility: ":gear:",
                moderation: ":tools:" // emojis for the categories
            }

            let ccate = [];
            //gets all the folders and commands
            readdirSync("./src/Commands/").forEach((dir) => {
                
                const commands = readdirSync(`./src/Commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                

                const name = `${emo[dir]} - ${dir}`;
                let nome = dir.charAt(0).toUpperCase() + dir.slice(1).toLowerCase();
                //let nome = dir.toUpperCase();

                let cats = new Object();

                //this is how it will be created as
                cats = {
                    name: name,
                    value: `\`${prefix}commands ${dir.toLowerCase()}\``,
                    inline: true
                }


                categories.push(cats);
                ccate.push(nome);
            });
//embed
			const embed = new MessageEmbed()
				embed.setAuthor(`Commands`, client.user.displayAvatarURL())
				embed.setColor(client.embedcolor)
				embed.setThumbnail(client.user.displayAvatarURL())

				embed.setDescription(`>>> This Command List **${client.user.username}**, Bot Prefix Defalut \`${prefix}\` Use: \`${prefix}<command name>\` without \`<>\` to use command\n\n**${client.emotes.link} [Invite Bot](https://discord.com/oauth2/authorize?client_id=802436261519687720&permissions=4294967287&scope=bot%20applications.commands) | [API](https://api.bdrxzzzz.xyz) | [Donate](https://trakteer.id/badriian24)**`)

				embed.addField(`${client.emotes.info} | Info`, '`help ([name])`, `commands ([name])`, `invite`, `ping`, `anime [name]`, `imdb [name]`, `npm [name]`, `maps [country]`, `playstore [name]`, `weather [country]`, `emojiinfo [name]`, `twitter [account]`')

				embed.addField(`${client.emotes.mod} | Moderation`, '`ban [user]`, `kick [user]`, `addemoji [name] [link]`, `slowmode [time]`, `addrole [user] [role]`, `removerole [user] [role]`, `clear [number]`, `warn [user] [reason]`, `warnings [user]`, `removewarn [id]`')

				embed.addField(`${client.emotes.coin} | Economy`, '`work`, `balance ([user])`, `transfer [user] [number]`, `deposite [number]`, `withdraw [number]`, `shop`, `buy [itemId]`, `sell [itemId]` `inventory`, `use [itemId]`, `rob [user]`, `passive [on/off]`')


        embed.addField(`${client.emotes.rpg} | RPG`, '`hunt`, `mine`')


				embed.addField(`${client.emotes.music} | Music`, '`play [song]`, `skip`, `stop`, `queue`, `volume [1/100]`, `loop`, `pause`, `resume`, `bassboost [none/low/medium/hight]`')


.addField(`🎉 | Giveaways`, '`start [#channel] [time] [countwinners] [prize]`, `reroll [messageid]`, `end [messageid]`')
				embed.addField(`${client.emotes.utils} | Utility`, '`afk [reason]`, `remind [time]`, `translate [country] [message]`')

				embed.addField(`${client.emotes.exclamation} | Interaction`, '`inosuke`, `nezuko`')


embed.addField(`${client.emotes.autoresponder} | Roleplay Kimetsu`, '`tanjiroSay [text]`, `zenitsuSay [text]`, `inosukeSay [text]`, `inosukeBeastSay [text]`')

				embed.addField(`${client.emotes.camera} | Image`, '`affect`, `beautiful`, `blur`, `brighten`')

				embed.addField(`${client.emotes.fun} | Fun`, '`joke`, `hug`, `reverse [text]`, `meme`')

				embed.addField(`${client.emotes.games} | Minigames`, '`rps [user]`, `snake`, `fasttype`, `guessthenumber`, `soccer`')


        embed.addField(`${client.emotes.autoresponder} | Autoresponder`, '`autoresponder-add [text] | [text]`, `autoresponder-remove [text]`, `autoresponder-list`')
				
				embed.addField(`${client.emotes.settings} | Settings`, '`ghostping [enable/disable]`')

				embed.addField(`${client.emotes.bot} | Bot`, '`botinfo`, `report [message]`, `suggestbot [message]`')

embed.addField(`${client.emotes.skull} | Danger Zone`, '`backup`')


if(message.channel.nsfw) {
	embed.addField(`🔞 | Nsfw`, '`hentai`')
} else {
	
}
				
				
				embed.addField("--------------------------------------------", `see a info for this bot \`${client.prefix}botinfo\`\n**--------------------------------------------**`)
				
				.setTimestamp()
				.setFooter(client.footer, client.user.displayAvatarURL())


			const dm = new MessageEmbed()
			.setAuthor(``)


			let menus = create_mh(ccate);
            return message.reply({
                embeds: [embed],
                components: menus.smenu 
            }).then((msgg) => {

                const menuID = menus.sid;

                const select = async (interaction) => {
                    if (interaction.customId != menuID) return;

                    let {
                        values
                    } = interaction;

                    let value = values[0];

                    let catts = [];

                    readdirSync("./src/Commands/").forEach((dir) => {
                        if (dir.toLowerCase() !== value.toLowerCase()) return;
                        const commands = readdirSync(`./src/Commands/${dir}/`).filter((file) =>
                            file.endsWith(".js")
                        );


                        const cmds = commands.map((command) => {
                            let file = require(`../../Commands/${dir}/${command}`); //getting the commands again

                            if (!file.name) return "No command name.";

                            let name = file.name.replace(".js", "");

                            if (client.commands.get(name).hidden) return;


                            let des = client.commands.get(name).description;
                            let emo = client.commands.get(name).emoji;
                            let emoe = emo ? `${emo} - ` : ``;

                            let obj = {
                                cname: `${emoe}\`${name}\``,
                                des
                            }

                            return obj;
                        });

                        let dota = new Object();

                        cmds.map(co => {
                            if (co == undefined) return;

                            dota = {
                                name: `${cmds.length === 0 ? "In progress." : co.cname}`,
                                value: co.des ? co.des : `No Description`,
                                inline: true,
                            }
                            catts.push(dota)
                        });

                        cots.push(dir.toLowerCase());
                    });

                    if (cots.includes(value.toLowerCase())) {
                        const combed = new MessageEmbed()
                            .setAuthor(`${value} Commands`, client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`>>> This Command List **${client.user.username}**, Bot Prefix Defalut \`${prefix}\` Use: \`${prefix}<command name>\` without \`<>\` to use command\n\n**${client.emotes.link} [Invite Bot](https://discord.com/oauth2/authorize?client_id=802436261519687720&permissions=4294967287&scope=bot%20applications.commands) | [API](https://api.bdrxzzzz.xyz) | [Donate](https://trakteer.id/badriian24)**`)
.addField(`--------------------------------------------`, `**--------------------------------------------**`)
                            .addFields(catts)

.setFooter(client.footer, client.user.displayAvatarURL())
                            .setColor(client.embedcolor)

                        await interaction.deferUpdate();

                        return interaction.message.edit({
                            embeds: [combed],
                            components: menus.smenu
                        })
                    };

                };

                const filter = (interaction) => {
                    return !interaction.user.bot && interaction.user.id == message.author.id
                };

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });
			

		} else if(args[0].toLowerCase() === "info") {
			const infoEmb = new MessageEmbed()
			.setAuthor(`Info Commands`, 'https://cdn.discordapp.com/emojis/897860920921964544.png')
				.setThumbnail(client.user.displayAvatarURL())
				.setColor(client.embedcolor)
.setDescription(`>>> This Command List **${client.user.username}**, Bot Prefix Defalut \`${prefix}\` Use: \`${prefix}<command name>\` without \`<>\` to use command\n\n**${client.emotes.link} [Invite Bot](https://discord.com/oauth2/authorize?client_id=802436261519687720&permissions=4294967287&scope=bot%20applications.commands) | [API](https://api.bdrxzzzz.xyz) | [Donate](https://trakteer.id/badriian24)**`)
			.addField(`--------------------------------------------`, '`help ([name])`, `commands ([name])`, `invite`, `ping`, `imdb [name]`, `npm [name]`, `maps [country]`, `playstore [name]`, `weather [country]`, `emojiinfo [name]`, `twitter [account]`')
.setFooter(client.footer, client.user.displayAvatarURL())
			.setTimestamp()
			message.channel.send({ embeds: [infoEmb] })
	} else if(args[0].toLowerCase() === "economy") {
const ecoEmb = new MessageEmbed()
			.setAuthor(`Economy Commands`, 'https://cdn.discordapp.com/emojis/897861832151289876.png')
				.setThumbnail(client.user.displayAvatarURL())
				.setColor(client.embedcolor)
.setDescription(`>>> This Command List **${client.user.username}**, Bot Prefix Defalut \`${prefix}\` Use: \`${prefix}<command name>\` without \`<>\` to use command\n\n**${client.emotes.link} [Invite Bot](https://discord.com/oauth2/authorize?client_id=802436261519687720&permissions=4294967287&scope=bot%20applications.commands) | [API](https://api.bdrxzzzz.xyz) | [Donate](https://trakteer.id/badriian24)**`)
			.addField(`--------------------------------------------`, '`work`, `balance ([user])`, `transfer [user] [number]`, `deposite [number]`, `withdraw [number]`, `shop`, `buy [itemId]`, `sell [itemId]`, `inventory`, `use [itemId]`, `rob [user]`, `passive [on/off]`')
.setFooter(client.footer, client.user.displayAvatarURL())
			.setTimestamp()
			message.channel.send({ embeds: [ecoEmb] })
	} else if(args[0].toLowerCase() === "music") {
const ecoEmb = new MessageEmbed()
			.setAuthor(`Music Commands`, 'https://cdn.discordapp.com/emojis/897861229698248705.png')
				.setThumbnail(client.user.displayAvatarURL())
				.setColor(client.embedcolor)
.setDescription(`>>> This Command List **${client.user.username}**, Bot Prefix Defalut \`${prefix}\` Use: \`${prefix}<command name>\` without \`<>\` to use command\n\n**${client.emotes.link} [Invite Bot](https://discord.com/oauth2/authorize?client_id=802436261519687720&permissions=4294967287&scope=bot%20applications.commands) | [API](https://api.bdrxzzzz.xyz) | [Donate](https://trakteer.id/badriian24)**`)
			.addField(`--------------------------------------------`, '`play [song]`, `skip`, `stop`, `queue`, `volume [1/100]`, `loop`, `pause`, `resume`, `bassboost [none/low/medium/hight]`')
.setFooter(client.footer, client.user.displayAvatarURL())
			.setTimestamp()
			message.channel.send({ embeds: [ecoEmb] })
	} else {
			const command =
				client.commands.get(args[0].toLowerCase()) ||
				client.commands.get(client.aliases.get(args[0]));


			if (!command) return message.channel.send({
				content: `**${client.emotes.error} | Invalid command. Use \`${prefix}commands\` to see all commands.**`
			});


			const emb3 = new MessageEmbed()
				.setAuthor(`Commands Details`, client.user.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL())
				.setDescription(`>>> **Name:** ${command.name ? `\`${command.name}\`` : "Not Provided"}\n**Description:** ${command.description ? `\`${command.description}\`` : "Not know"}\n**Maintance:** ${command.Maintance ? `\`${command.Maintance}\`` : "`false`"}\n**Aliases:** ${command.aliases ? `\`${command.aliases.join(" ")}\`` : "No Aliases"}\n**Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : `\`${prefix}${command.name}\``}`)
				.setColor(client.embedcolor)
				.setFooter(client.footer, client.user.displayAvatarURL())
				.setTimestamp()
			message.channel.send({
				embeds: [emb3]
			})
		}

		





	}
}