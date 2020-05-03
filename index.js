const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzA1NDI2MjY5MjA2MDg1NzY1.XqrhfQ.kJ3BVzNmDQCEBvk-wY4LBREpJvs';

const PREFIX ='!';

var version ='0.0.0';
bot.on('ready',() =>{
    console.log('This bot is online!');
})

bot.on('message',message =>{
    if(message.content ==="hello")
    {
        message.reply('Công đã mở mắt');
    }
    let args =  message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'clip':
            message.channel.send('https://www.youtube.com/watch?v=j9V78UbdzWI')
            break;
        case 'info':
            if (args[1] ==='version'){
                message.channel.send('Version : '+ version)
            }
            else{
                message.channel.send('invalid args')
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('Error ')
            message.channel.bulkDelete(args[1]);
            break;    
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('User information')
            .addField('Player name      ', message.author.username,true)
            .addField('Version :      ' ,version,true)
            .addField('current server', message.guild.name)
            .addField('Version :      ' ,version,true)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL)
            message.channel.send(embed);
            break;

    }
})

bot.login (token);