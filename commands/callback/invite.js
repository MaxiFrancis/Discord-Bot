const { MessageEmbed } = require('discord.js')

exports.invite = function (args) {
    const embed = new MessageEmbed().setTitle('Invitație server Biruitor prin Hristos').setDescription('https://discord.gg/EmPrAhm')

    embed.setFooter("© Biruitor prin Hristos")

    return embed
  }

