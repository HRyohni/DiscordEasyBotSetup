const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();

const PREFIX = '+';

//embed 
const embed = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle("Commands")
    .addField("+info", "ispisati će dodatne informacije")
    .addField("+ip", "ispisati će ip servera ")
    .addField("+pocmi", "kako krenuti igrat ")
    .addField("+verzija", "ispisati će verziju minecrafta koja se koristi za server")
    .addField("+modpack", "ispisati će link modpack-a")
    .addField("+modovi", "ispisati će sve modove koje se koriste u modpacku")
    .addField("Server Stuff", ":arrow_down:")
    .addField("+admin", "ispisati će ime admina")
    .addField("+clear", '+clear [broj poruka(do ~10)] - izbrise poruke chat-a)');

const kakoigrati = new Discord.MessageEmbed()
    .setColor(0x2BFE72)
    .setTitle("Kako poceti igrati!")
    .setURL("https://tlauncher.org/en/")
    .addField(":arrow_up: Preuzmi minecraft :arrow_up:", "preuzmi minecraft sa linka  ")
    .addField("Upisi +Modpack", "preuzmi minecraft modove")
    .addField("Premjesti modove", "-u **trazilici** upisi %appdata% \n -premjesti modove u .minecraft/mods ")
    .addField("Preuzmi **Forge**", "preuzmi forge **client** 1.18.1-39.1.2 ")
    .addField("Pokreni igru ", "u Tlauncheru pokreni verziju **Release1.18.1-forge-39.1.2** ")
    .addField("povezi se ", "Spoji se na ip => **+ip**")
    .addField("Uživaj ", "👍");




const info = new Discord.MessageEmbed()
    .setColor(0x2BFE72)

.addField("studentskiserver", "Dobro došli na **Studentski** **server**. Ovaj server je namijenjen za sve ljude koji su se pridružili u želji da zaigraju **Minecraft** sa svojim društvom. Za sve dodatne informaicje, tu je naš **serverski** **bot** koji je uvijek na usluzi da pomogne. Očekujemo da se dobro zabavite i da vam nikada ne bude dosadno 😉");



client.once('ready', () => {
    console.log('Minecraft Discord bot on!');
    client.user.setActivity('+help', { type: 'WATCHING' });
});


client.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {

        case 'help':
            msg.channel.send(embed);
            break;
        case 'serverconfig':
            msg.channel.send(embed);
            break;

        case 'ip':
            msg.channel.send("IP: 135.125.52.192:25592");
            break;
        case 'admin':
            msg.channel.send("HRyohni 2#8565 & @Bozo#4802 & @MateoKS_#2599");
            break;
        case 'verzija':
            msg.channel.send("Verzija: 1.18.1.");
            break;
        case 'modovi':
            const fs = require('fs')
            const data = fs.readFileSync('mods.txt', 'utf8')
            try {

                msg.channel.send("poslo sam ti u dm 😉");
                msg.author.send(data.substring(0, 2000));
                msg.author.send(data.substring(2000, 4000));
                msg.author.send(data.substring(4000, 6000));
                msg.author.send(data.substring(6000, data.length));

            } catch (err) {
                console.error(err)
            }
            break;


        case 'modpack':
            msg.reply("Curse Forge: https://www.curseforge.com/minecraft/modpacks/vap/files/3649181")
            msg.reply("Mega: https://mega.nz/file/lH5EwTII#SMjt0cwbCrXt_zeJ82ZenKqmZLVaO3e2S76lIQAEmTk")
            break;
        case 'clear':
            if (!args[1]) return msg.reply('nedostaje ti drugi argument retarde');
            try {
                msg.channel.bulkDelete(args[1]);

            } catch (err) {
                msg.reply("treba mi broj jos...");
            }
            break;
        case 'info':
            msg.channel.send(info);
            break;
        case 'pocmi':
            msg.channel.send(kakoigrati);
            break;
        case 'banlista':
            const fs1 = require('fs')
            const data1 = fs1.readFileSync('E:/Games/minecraft server/banned-players.json', 'utf8')
            msg.channel.send("Ban Lista: " + data1);
            break;
    }
});

client.login('YOUR TOKEN');
