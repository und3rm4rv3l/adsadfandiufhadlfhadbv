exports.run = (Pietra, message, args) => {
if (!['244489368717230090'].includes(message.author.id)) return;
    try {
      var code = suffix;
      var evalued = eval(code);

      if (typeof evalued !== "string")
        evalued = require("util").inspect(evalued);

     message.channel.sendCode("x1", evalued);
    } catch(err) {
          message.channel.send({embed: 
          {description: ` \`\`\`ERROR\`\`\` **Código >** \`\`\`Js\n${suffix}\n\`\`\` \`\`\`xl\n${err}\n\`\`\` `,
          color: 0x4959e9}});
  

        
}};
