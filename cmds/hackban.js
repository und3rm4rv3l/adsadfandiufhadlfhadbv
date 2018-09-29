const Discord = require("discord.js");

exports.run = (Pietra, message, args) => {


            let sysop =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  `Foi banido por ${message.author.username}#${message.author.discriminator}. Motivo não especificado.`;



if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply(':x: Desculpe, você não tem permissão de banir usuário neste servidor!');
let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.channel.send(`:warning: ${message.author}! Mencione alguém ou especifique um ID.`);

let banPerms = message.guild.member(Pietra.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.reply(`:x: ${message.author}! Eu não tenho permissão para banir usuários nesse servidor.`);

let user = Pietra.users.has(id) ? Pietra.users.get(id) : null;

if (!user) return message.reply(":x: Não encontrei nenhum usuário.")


if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply(':x: Desculpe, você não tem permissão de banir usuário neste servidor!');


message.guild.fetchBans().then(bans => {
let users = bans.filter(r => r === user);
if (users.first()) 
return message.channel.send(`:x: ${message.author} este usuário já está banido aqui.`);

    
let bannable = message.guild.member(id)
if (bannable) {  
if (bannable.highestRole.position >= message.member.highestRole.position) return message.reply("<:xguardian:476061993368027148> Você não pode banir este usuário pois seu cargo é menor ou igual a o do usuário a ser banido!")
    
if (!message.guild.member(user).bannable) 
return message.reply(':x: Eu não posso banir esse usuário.');
    
} else {

    message.guild.ban(user, sysop);
        let server = message.guild
    const embed1 = new Discord.RichEmbed()
    .setTitle(`Ban Ação`)
    .addField(`Usuário banido`, user)
    .addField(`Banido da`, server.name)
    .addField(`Moderador`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#ff3535')
    message.channel.send({embed1});
    user.send({embed1})
}
if (user) {

   
    message.guild.ban(user, sysop);
        let server = message.guild
    const embed = new Discord.RichEmbed()
    .setTitle(`Ban Ação`)
    .addField(`Usuário banido`, user)
    .addField(`Banido da`, server.name)
    .addField(`Moderador`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#ff3535')
    message.channel.send({embed});
    user.send({embed})

} else {
    message.reply(':x: Não encontrei nenhum usuário');


}
});
};
