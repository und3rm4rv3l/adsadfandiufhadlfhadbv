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
  
  /*Pietra.on("ready", () => {
Pietra.user.setPresence({
        status: 'dnd',
        game: {
            name: `Não irrite o Azu, você não vai gostar de ver ele irritado.`,
            url: 'https://www.twitch.tv/expextreadriano'
        }
});
});*/

Pietra.on("ready", (message) => {
function setActivity() {

	 let status = [{name: `Não irrite o Azu, você não vai gostar de ver ele irritado.`, type: 'STREAMING', url: `https://www.twitch.tv/expextreadriano`},
              {name: `Project Legends`, type: 'WATCHING'},
              {name: `com ${Number(message.guild.memberCount).toLocaleString()} membros`, type: 'PLAYING'}];
      let escolher = status[Math.floor(Math.random() * status.length)];
      Pietra.user.setPresence({game: escolher});
  }
  
  setActivity();
  setInterval(() => setActivity(), 11000);
});

Pietra.login(process.env.atapo);

Pietra.on('ready', async () => {
    console.log("Project Legends ON!");
});
