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
            message.reply("SR commands requires your SR rank in a number form. If you are less then 500 sr, I would advise to guess the closest number.\nEx. !sr 2231\n\nIf base !sr command doesn't work use backs aka !srbronze, !srsilver, etc.")

        } else if (firstValue === "support") {
            message.reply("```**Current Command List**\n-!help\n-!xp\n-!sr\n-!srbronze\n-!srsilver\n-!srgold\n-!srplat\n-!srdiamond\n-!srmasters\n-!ping```")

        } else if (firstValue === "all") {

        } else {
            message.reply("Command not found, please reinput command with correct values.")

        }
        
        
    }
}

    



