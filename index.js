const Discord = require('discord.js');
const keys = require('./keys.json');
const Pietra = new Discord.Client();
const fs = require('fs');

Pietra.on("message", message => {
    if (message.author.bot) return;
  
    if (!message.content.startsWith(keys.prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(keys.prefix.length);
   
    let args = message.content.split(" ").slice(1);
    //
  
   
    try {   
           //aqui voco pode colocar qualquer nome (não esqueça de mudar o nome da pasta para o mesmo)
 
	  let commandFile = require(`./cmds/${command}.js`);
      commandFile.run(Pietra, message, args);
    }catch (err) {
     
   
    }
   
  });
  
  Pietra.on("ready", () => {
Pietra.user.setPresence({
        status: 'dnd',
        game: {
            name: `na BAD VIBES!`,
            url: 'https://www.twitch.tv/expextreadriano'
        }
});
});

Pietra.login(process.env.atapo);

Pietra.on('ready', async () => {
    console.log("Project Legends ON!");
});
