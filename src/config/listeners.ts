
import { Client, Interaction } from "discord.js";
import { Commands } from "../commands";


export const listener = (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        console.log(`${client.user.username} is online`);
    });
};

