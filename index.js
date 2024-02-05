const { Client, GatewayIntentBits } = require("discord.js");

//virtual client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong !..");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generting short ID for " + url,
    });
  }
  message.reply({
    content: "hii from bot",
  });
});
client.login(
  "MTIwMzc3MTA2OTM5NjI5NTczMA.G2NNw3.UMh7ULiG_lBK15Iil8YbQzewXZK7bD4m-ycW_0"
);
