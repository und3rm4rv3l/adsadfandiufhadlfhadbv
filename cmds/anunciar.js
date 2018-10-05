const cfg = require("../keys.json");
const Discord = require("discord.js");

exports.run = (Pietra, message, args) => {
    
	if (!['244489368717230090', '472533471546572800', '481829760369033228', '464521999277096991', '377252297912221706', '447775548685680653', '487090463338397696','393211390413766658'].includes(message.author.id)) 
	return  message.channel.send(`${message.author} Comando registro! Apenas usuários **Owners** e **Sub-Owners** podem usá-lo.`);

	
    const args2 = message.content.split(" ").slice(1); 
    const sayMessage = args2.join(" "); 
   
    if (!sayMessage) return message.reply('Você esqueceu de colocar o aviso!')
    message.channel.send(` Ok ${message.author}! O aviso está sendo enviado...`)
    
    let razaod = args.slice(1).join(' ');
    var server = message.guild;
    let xd =  args
        ? args[0]
        : null;
message.guild.members.map(a => 
Pietra.users.get(a.id).send({

"embed": {

"title": `${message.guild.name}`,
    
"description": `${razaod}`,

"color": 0xf1450c,
            
"image": { "url": xd  }}
        })
			 )
};
