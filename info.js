const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');

module.exports = {

    name: "info",
    description:"Permet de voir mes information",
    permission: "Aucune",
    dm: true,

    async run(enigma, message, args) {
        const startTime = Date.now()
        const endTime = Date.now()
        let user = message.user;
        const embed = new EmbedBuilder()
        .setColor("#3E005D")
        .setTitle(`<:tada_purple:1013098535631212544> | Et voila mes information: ${message.user.username}`)
        .addFields(
            { name: `> <a:earthblurpletrans:1014307309486354502> | Serveur:`, value: `> Je suis sur ${enigma.guilds.cache.size} __Serveurs__`, inline: false },
            { name: '> <a:blurplewave:1014307314943148102> | Membre Total:', value: `> Je comporte ${enigma.users.cache.size} __Membres__ au **Total**`, inline: false },
            { name: '> <:blurple_text_channel:1014307231375822959> | Channels Total:', value: `> Avec ${enigma.channels.cache.size} __Channels__ au **Total**`, inline: false },
            { name: '> <:blurple_crown:1014307277341212672> | Emoji Total:', value: `> Utilise ${enigma.emojis.cache.size} __Emoji__ au **Total**`, inline: false },
            { name: '> <:Rules_Purple:1013098774207414363> | Commandes Principal:', value: '> Tout en `/commandes` __plus info__ avec la commande `/help`', inline: false },
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/1010571383799029793/1014440968495321098/mr-enigma-logo.jpg')
        message.reply({embeds: [embed]})

    }
}