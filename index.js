require('dotenv').config()
const { Client, Intents } = require('discord.js');
const  token  = process.env.DISCORD_TOKEN

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

if(token) {
	console.log("it does exist");
}
client.on("debug",console.debug)
client.on("warn",console.warn)

client.on('interactionCreate', async interaction => {
	console.error(interaction);
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
	else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}
	else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.login(token);