exports.run = (Pietra, message, args) => {

 if (!message.member.hasPermission('MANAGE_MESSAGES'))
 return message.channel.send(`:x:  | Desculpe ${message.author}, este comando está disponível apenas para cargos de Gerenciamento de mensagens do servidor.`);

            let del = message.content.split(' '),
            user   = message.mentions.users.size > 0 ? message.mentions.users.first() : null,
            amount = isNaN(Number(del[1])) ? Number(del[2]) : Number(del[1]);
        
        if (!amount) 
            return message.channel.send(`:x: ${message.author}! Especifique a quantidade de mensagens a serem deletadas. Sendo **100** o máximo.`);
        if (!amount && !user) 
            return message.channel.send(`:x: ${message.author}! Você deve especificar um usuário mais a quantidade de mensagens a serem apagadas do mesmo ou apenas especificar a quantidade de mensagens a serem deletadas no chat em geral.`);
        if (amount < 2 || amount > 100) 
            return message.channel.send(`:x: ${message.author}! Limite incorreto. Tente entre 2 á 100`);
        
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos de Gerenciamento de mensagens do servidor.');

        message.channel.fetchMessages({
            limit: amount,
        }).then(messages => {
            let deleted = messages.filter(m => user ? m.author.id === user.id : m).array().slice(0, amount);
            if (deleted.length < 2)
            return message.channel.send(`:x: ${message.author}! Não encontrei nada num limite de ${amount} mensagens!`);
            
            message.channel.bulkDelete(deleted).catch(error => console.log(error.stack));

message.channel.send(`:wastebasket: | ${message.author} limpou um total de **${amount} mensagens** neste canal.`);

        });
};
