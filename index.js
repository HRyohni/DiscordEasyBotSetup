const Discord = require('discord.js'); //imports discord commands
const client = new Discord.Client();
const PREFIX = '+'; // Your prefix to the server

//embed
const embed = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle("Commands")
    .addField("+help", "Shows all commands")
    .addField("+admin", "Shows who is king")
    .addField("+fuckoff", "fuckoff")
    .addField("+clear", "deletes messages +clear [amount]");


client.once('ready', () => { // will start when bot is launched
    console.log('Discord bot on!'); //outputs messeage in console when server is on
    client.user.setActivity(PREFIX + 'help', { type: 'WATCHING' }); // sets bot status
});

client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {

        case 'help':
            msg.channel.send(embed); // sends embed
            break;

        case 'admin':
            msg.channel.send("Admin of server is: Tag"); //sends msg who is admin
            break;

        case 'fuckoff': // just fuck off
            msg.channel.send("No fuck you!");
            break;

        case 'clear': // clears messeges from chat
            if (!args[1]) return msg.reply('you are missing second argument');
            try {
                msg.channel.bulkDelete(args[1]);

            } catch (err) {
                msg.reply("I need nummber");
            }
            break;
        case 'example':
            // your code goes here
            // activate when used commands +example
            break;
    }
});
client.login('YOUR TOKEN'); // your discord token needs to be here
