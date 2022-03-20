const Discord = require('discord.js'); //imports discord commands
const client = new Discord.Client();
const PREFIX = '+'; // Your prefix to the server

//embed
const embed = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle("Commands")
    .addField("+help", "Shows all commands")
    .addField("+help", "Clears messeges +clear [amount of msg] ")
    .addField("+coinflip", "Plays CoinFlip ")
    .addField("+admin", "Says who is admin ");


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
        case 'coinflip': // head or tails
            function doRandHT() {
                var rand = ['HEADS!', 'TAILS!'];

                return rand[Math.floor(Math.random() * rand.length)];
            }

            const embed = {
                "title": `Here is the winner!`,
                "description": doRandHT(),
                "color": 7584788,
            };
            message.channel.send({ embed });
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
