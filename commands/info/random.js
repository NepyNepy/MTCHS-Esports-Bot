const Canvas = require("canvas")
module.exports = {
    name: "random",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix}) => {

        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        let array = message.content.split(" ").slice(1).join(" ")


        let firstValue = array


        if (firstValue === "tank") {
            let randomValue = Math.floor(Math.random() * 8) + 1 

        switch (randomValue) {
            case 1:
                message.reply(`**Your hero is D.Va**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942804853338558495/D.Va.png")
              //message.reply("https://cdn.discordapp.com/attachments/936635573609824310/942804853338558495/D.Va.png")
            break;

            case 2:
                message.reply(`**Your hero is Orisa**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811526606254130/Orisa.png")
            break;
            
            case 3:
                message.reply(`**Your hero is Reinhardt**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811526979526656/Reinhardt.png")
            break;
            
            case 4:
                message.reply(`**Your hero is Roadhog**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811527206043718/Roadhog.png")
            break;
            
            case 5:
                message.reply(`**Your hero is Sigma**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811527566721024/Sigma.png")
            break;
            
            case 6:
                message.reply(`**Your hero is Winston**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811527847755836/Winston.png")
            break;
            
            case 7:
                message.reply(`**Your hero is Wrecking Ball**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811528053288970/WreckingBall.png")
            break;
            
            case 8:
                message.reply(`**Your hero is Zarya**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811528359477278/Zarya.png")
            break;

        }

        } else if (firstValue === "damage") {
            let randomValue = Math.floor(Math.random() * 17) + 1 

        switch (randomValue) {
            case 1:
                message.reply(`**Your hero is Ashe**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943160573087076472/Ashe.png")
            break;

            case 2:
                message.reply(`**Your hero is Bastion**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943160573300977734/Bastion.png")
            break;
            
            case 3:
                message.reply(`**Your hero is Cassidy**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943160573649125427/Cassiby.png")
            break;
            
            case 4:
                message.reply(`**Your hero is Doomfist**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943164726148472852/Doomfist.png")
            break;
            
            case 5:
                message.reply(`**Your hero is Echo**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163421325656124/Echo.png")
            break;
            
            case 6:
                message.reply(`**Your hero is Genji**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163421568933910/Genji.png")
            break;
            
            case 7:
                message.reply(`**Your hero is Hanzo**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163421824798720/Hanzo.png")
            break;
            
            case 8:
                message.reply(`**Your hero is Junkrat**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163514758000690/Junkrat.png")
            break;

            case 9:
                message.reply(`**Your hero is Mei**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165307567079475/Mei.png")
            break;

            case 10:
                message.reply(`**Your hero is Pharah**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165307864887357/Pharah.png")
            break;

            case 11:
                message.reply(`**Your hero is Reaper**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308074598460/Reaper.png")
            break;

            case 12:
                message.reply(`**Your hero is Soldier: 76**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308280131624/Soldier_76.png")
            break;

            case 13:
                message.reply(`**Your hero is Sombra**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308498247710/Sombra.png")
            break;

            case 14:
                message.reply(`**Your hero is Symmetra**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308695375922/Symmetra.png")
            break;

            case 15:
                message.reply(`**Your hero is Torbjorn**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165309509058604/Torbjorn.png")
            break;

            case 16:
                message.reply(`**Your hero is Tracer**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165897537880094/Tracer.png")
            break;

            case 17:
                message.reply(`**Your hero is Widowmaker**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165897860862032/Widowmaker.png")
            break;

        }

        } else if (firstValue === "support") {
            let randomValue = Math.floor(Math.random() * 7) + 1 

        switch (randomValue) {
            case 1:
                message.reply(`**Your hero is Ana**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156836675239956/Ana.png")
            break;

            case 2:
                message.reply(`**Your hero is Baptiste**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156836910104576/Baptiste.png")
            break;
            
            case 3:
                message.reply(`**Your hero is Brigitte**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837199540294/Brigitte.png")
            break;
            
            case 4:
                message.reply(`**Your hero is Lucio**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837455372369/Lucio.png")
            break;
            
            case 5:
                message.reply(`**Your hero is Mercy**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837648318494/Mercy.png")
            break;
            
            case 6:
                message.reply(`**Your hero is Moira**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837891575888/Moira.png")
            break;
            
            case 7:
                message.reply(`**Your hero is Zenyatta**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156838256496690/Zenyatta.png")
            break;
        }

        } else if (firstValue === "all") {
            let randomValue = Math.floor(Math.random() * 32) + 1 

        switch (randomValue) {
            case 1:
                message.reply(`**Your hero is D.Va**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942804853338558495/D.Va.png")
            break;

            case 2:
                message.reply(`**Your hero is Orisa**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811526606254130/Orisa.png")
            break;
            
            case 3:
                message.reply(`**Your hero is Reinhardt**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811526979526656/Reinhardt.png")
            break;
            
            case 4:
                message.reply(`**Your hero is Roadhog**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811527206043718/Roadhog.png")
            break;
            
            case 5:
                message.reply(`**Your hero is Sigma**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811527566721024/Sigma.png")
            break;
            
            case 6:
                message.reply(`**Your hero is Winston**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811527847755836/Winston.png")
            break;
            
            case 7:
                message.reply(`**Your hero is Wrecking Ball**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811528053288970/WreckingBall.png")
            break;
            
            case 8:
                message.reply(`**Your hero is Zarya**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/942811528359477278/Zarya.png")
            break;

            case 9:
                message.reply(`**Your hero is Ashe**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943160573087076472/Ashe.png")
            break;

            case 10:
                message.reply(`**Your hero is Bastion**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943160573300977734/Bastion.png")
            break;
            
            case 11:
                message.reply(`**Your hero is Cassidy**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943160573649125427/Cassiby.png")
            break;
            
            case 12:
                message.reply(`**Your hero is Doomfist**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943164726148472852/Doomfist.png")
            break;
            
            case 13:
                message.reply(`**Your hero is Echo**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163421325656124/Echo.png")
            break;
            
            case 14:
                message.reply(`**Your hero is Genji**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163421568933910/Genji.png")
            break;
            
            case 15:
                message.reply(`**Your hero is Hanzo**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163421824798720/Hanzo.png")
            break;
            
            case 16:
                message.reply(`**Your hero is Junkrat**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943163514758000690/Junkrat.png")
            break;

            case 17:
                message.reply(`**Your hero is Mei**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165307567079475/Mei.png")
            break;

            case 18:
                message.reply(`**Your hero is Pharah**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165307864887357/Pharah.png")
            break;

            case 19:
                message.reply(`**Your hero is Reaper**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308074598460/Reaper.png")
            break;

            case 20:
                message.reply(`**Your hero is Soldier: 76**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308280131624/Soldier_76.png")
            break;

            case 21:
                message.reply(`**Your hero is Sombra**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308498247710/Sombra.png")
            break;

            case 22:
                message.reply(`**Your hero is Symmetra**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165308695375922/Symmetra.png")
            break;

            case 23:
                message.reply(`**Your hero is Torbjorn**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165309509058604/Torbjorn.png")
            break;

            case 24:
                message.reply(`**Your hero is Tracer**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165897537880094/Tracer.png")
            break;

            case 25:
                message.reply(`**Your hero is Widowmaker**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943165897860862032/Widowmaker.png")
            break;

            case 26:
                message.reply(`**Your hero is Ana**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156836675239956/Ana.png")
            break;

            case 27:
                message.reply(`**Your hero is Baptiste**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156836910104576/Baptiste.png")
            break;
            
            case 28:
                message.reply(`**Your hero is Brigitte**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837199540294/Brigitte.png")
            break;
            
            case 29:
                message.reply(`**Your hero is Lucio**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837455372369/Lucio.png")
            break;
            
            case 30:
                message.reply(`**Your hero is Mercy**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837648318494/Mercy.png")
            break;
            
            case 31:
                message.reply(`**Your hero is Moira**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156837891575888/Moira.png")
            break;
            
            case 32:
                message.reply(`**Your hero is Zenyatta**\n` + "https://cdn.discordapp.com/attachments/936635573609824310/943156838256496690/Zenyatta.png")
            break;

        }

        } else {
            message.reply("Command not found, please reinput command with correct values.")

        }
        
        
    }
}

    



