import { ChatInputApplicationCommandData, Client, Interaction } from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: Interaction) => void;
}