require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const prefix = "!";

client.on("ready", () => {
    console.log(`${client.user.tag} is online`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply("Pong 🏓");
    }

    if (command === "hello") {
        message.reply("Hello 👋");
    }

    if (command === "say") {
        const text = args.join(" ");
        if (!text) return message.reply("Provide text!");
        message.channel.send(text);
    }
});

client.login(process.env.TOKEN);
