const cfg = require("../keys.json");
const Discord = require("discord.js");

exports.run = (Pietra, message, args) => {
    
	if (!['244489368717230090', '314966364873818112'].includes(message.author.id)) 
	return  message.channel.send(`${message.author} Comando restritro! Apenas usuários autorizados podem usá-lo.`);

	
    const args2 = message.content.split(" ").slice(1); 
    const sayMessage = args2.join(" "); 
   
    if (!sayMessage) return message.reply('Você esqueceu de colocar o aviso! **Modo de uso:** pl!anunciar <link da imagem> <texto>')
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

"color": 16716357,
            
"image": { "url": xd  }}
        })
			 )
};
