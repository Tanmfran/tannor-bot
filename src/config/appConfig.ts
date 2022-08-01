import { Client } from "discord.js";
import { interractionCreate } from "src/config/interactionCreate";
import { listener } from "src/config/listeners";



const token = "6af84b830b2bf138cad5fe776711cdae6252031bfa7e91f92f3bd2b5ccba18fb"

const client_id = "1003507441335537694"

export const initDiscordBot = (client: Client) => {
    listener(client);
    interractionCreate(client);
    client.login(token);
}