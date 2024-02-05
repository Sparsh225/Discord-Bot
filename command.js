const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIwMzc3MTA2OTM5NjI5NTczMA.G2NNw3.UMh7ULiG_lBK15Iil8YbQzewXZK7bD4m-ycW_0"
);

async function refreshCommands() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1203771069396295730"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

refreshCommands(); // Call the async function
