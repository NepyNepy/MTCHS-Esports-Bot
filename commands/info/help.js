module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix}) => {

        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array

        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        message.reply("```Welcome to the MTCHS eSports Bot! Current commands for public use are listed in each sub-section.\n\n-!cmd xp\n\n-!cmd sr\n\n-!cmd all\n\nIf you have any questions contact QT_NepyNepy#4416 on discord```")
        // if (firstValue === "xp") {
        //     message.reply("XP command required your level in a number. Each star is 100 levels, plus the samll number next to it.\nEx. If you are bronze border with 2 stars and level 91\n**!xp 291**")
    
        //     } else if (firstValue === "sr") {
        //         message.reply("SR commands requires your SR rank in a number form. If you are less then 500 sr, I would advise to guess the closest number.\nEx. !sr 2231\n\nIf base !sr command doesn't work use backs aka !srbronze, !srsilver, etc.")
    
        //     } else if (firstValue === "all") {
        //         message.reply("```**Current Command List**\n-!help\n-!xp\n-!sr\n-!srbronze\n-!srsilver\n-!srgold\n-!srplat\n-!srdiamond\n-!srmasters\n-!ping```")
    
        //     } else {
        //         message.reply("Command not found, please reinput command with correct values.")
    
        //     }
        

        
        
        
    }
}

    



