import { Client } from "discord.js";
import { initDiscordBot } from "./config/appConfig";



console.log("Bot is starting...");


const client = new Client({
    intents: []
});


initDiscordBot(client);

console.log(client);