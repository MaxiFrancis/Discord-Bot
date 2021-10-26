const Discord = require('discord.js');

exports.borcan = {data: {
    name: 'borcan',
    description: 'Retirnează un verset',
    options: [
      {
        name: 'pentru',
        description: 'tagul celui care va primi versetul',
        required: false,
        type: 9, //mentionable
      },
      // {
      //   name: 'age',
      //   description: 'Your age',
      //   required: false,
      //   type: 4, // integer
      // },
    ],
  },
}

exports.cauze = {
  data: {
    name: 'cauze',
    description: 'Cauzele comunității',
  }
}

exports.invite = {
  data: {
    name: 'invite',
    description: 'Invitația pentru serverul BPH',
  }
}

exports.provocare = {
  data: {
    name: 'provocare',
    description: 'Returnează o provocare',
    options: [
      {
        name: 'tag',
        description: 'tagul celui care va primi provocare',
        required: false,
        type: 9, //mentionable
      }
    ]
  }
}

exports.intrebare = {
  data: {
    name: 'intrebare',
    description: 'Returnează o întrebare',
  }
}

exports.intro = {
  data: {
    name: 'intro',
    description: 'O intrebare de cunoaștere',
  }
}

exports.ingeras = {
  data: {
    name: 'ingeras',
    description: 'Fii tu îngeraș pentru o persoană',
    options: [
      {
        name: 'tag',
        description: 'tagul celui care va primi mesajul tău',
        required: true,
        type: 9, //mentionable
      },
      {
        name: 'mesaj',
        description: 'Mesajul tău ca îngeraș pentru această persoană',
        required: true,
        type: 3, //string
      },

   ]}
}

exports.hello = {
  data: {
    name: 'hello',
    description: 'Say a hello mesage.',
  }
}

exports.message = {
  data: {
    name: 'message',
    description: 'Your message',
  }
}