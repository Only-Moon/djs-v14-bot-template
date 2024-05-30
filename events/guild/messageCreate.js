const { EmbedBuilder, Colors } = require("discord.js");

module.exports = async (client, message) => {
  
  if (message.author.bot) return;
  try {
    const mentionRegex = message.content.match(
      new RegExp(`^<@!?(${client.user.id})>`, "gi")
    );
    
    if (mentionRegex) {
      const ping = new EmbedBuilder()
        .setDescription(
          ` > ɛiɜ • **Hello I'm ${client.user.username}**!\n\n > ↛ • You can see all my commands by running \`/help\`!`
        )
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .setColor(client.color)
        .setFooter({ text: "Made by .moonbow." })
        .setTimestamp();


      await message
        .reply({
          embeds: [ping],
          allowedMentions: { repliedUser: false },
        })
      
    }
  } catch (e) {
    console.log(String(e.stack));
  }
};
