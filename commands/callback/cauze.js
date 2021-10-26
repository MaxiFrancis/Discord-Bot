const { MessageEmbed } = require('discord.js')
exports.cauze = function (args) {
   
   const embed = new MessageEmbed 
   embed.setColor(389763)
   embed.setTitle("Cauze comune de rugăciune BPH")
   embed.addField("Rugăciuni țintite pentru:", " ➤ UNITATE, smerenie, maturizare spirituală pe BPH\n ➤ creșterea dragostei față de rugăciune (rugăciune pentru rugăciune), lanț de rugăciune. :pray::heart::pray:")
   embed.addField("\n \n_ \n _ \nRugăciuni pentru dorințe comune: ", " ➤ implicarea comunității BPH în lucrări de ajutorare, misiune (în offline)\n ➤ O echipă BPH care să meargă în misiune. \n ➤ Evanghelizare pe stradă \n ➤ Viitoarele proiecte online și offline")
   embed.setFooter("©Birutor prin Hirstos")
     
   return embed
}
   