const DiscordJS = require('discord.js')
require('dotenv').config()
const fs = require('fs');

const { invite } = require('./commands/data/data.js')

const guildId = '736948825519947846'
const client = new DiscordJS.Client()

// require data for commands
client.datas = require("./commands/data/data.js")
client.borcan = require('./commands/callback/borcan.js')
client.cauze = require('./commands/callback/cauze.js')
client.hello = require('./commands/callback/hello.js')
client.intrebare = require('./commands/callback/intrebare.js')
client.intro = require('./commands/callback/intro.js')
client.invite = require('./commands/callback/invite.js')
client.provocare = require('./commands/callback/provocare.js')




const getApp = (guildId) => {
  const app = client.api.applications(client.user.id)
  if (guildId) {
    app.guilds(guildId)
  }
  return app
}

client.on('ready', async () => {
  console.log('The bot is ready')

  // await getApp(guildId).commands('855545499851554827').delete()
  
  //getting commands
  const commands = await getApp(guildId).commands.get()
  console.log(commands)

//posting commands
  await getApp(guildId).commands.post( client.datas.borcan )
  await getApp(guildId).commands.post( client.datas.cauze )
  await getApp(guildId).commands.post( client.datas.hello )
  await getApp(guildId).commands.post( client.datas.intrebare )
  await getApp(guildId).commands.post( client.datas.intro )
  await getApp(guildId).commands.post( client.datas.invite )
  await getApp(guildId).commands.post( client.datas.provocare )

  // responding to commands used
  client.ws.on('INTERACTION_CREATE', async (interaction) => {
    const { name, options } = interaction.data

    const command = name.toLowerCase()

    const args = {}

    console.log(options)

    if (options) {
      for (const option of options) {
        const { name, value } = option
        args[name] = value
      }
    }

    console.log(args)

    // callback returns
    if(command === 'borcan') {
      reply(interaction, client.borcan.borcan(args) )
    } else if (command === 'cauze') {
      reply(interaction, client.cauze.cauze(args) )
    } else if (command === 'hello') {
      reply(interaction, client.hello.hello(args) )
    } else if(command === 'intrebare') {
      reply(interaction, client.intrebare.intrebare(args) )
    } else if (command === 'intro') {
      reply(interaction, client.intro.intro(args) )
    } else if (command === 'invite') {
      reply(interaction, client.invite.invite(args) )
    } else if (command === 'provocare') {
      reply(interaction, client.provocare.provocare(args) )
    }
  })
})

const reply = async (interaction, response) => {
  let data = {
    content: response,
  }

  // Check for embeds
  if (typeof response === 'object') {
    response.setColor("#1f0a3c")
    data = await createAPIMessage(interaction, response)
  }

  client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 4,
      data,
    },
  })
}

const createAPIMessage = async (interaction, content) => {
  const { data, files } = await DiscordJS.APIMessage.create(
    client.channels.resolve(interaction.channel_id),
    content
  )
    .resolveData()
    .resolveFiles()

  return { ...data, files }
}

client.login(process.env.TOKEN)
//  cd C:\Users\upc\Documents\GitHub\Slash