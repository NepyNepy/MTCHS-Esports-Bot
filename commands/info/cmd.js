module.exports = {
    name: "cmd",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix}) => {

        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array


        if (firstValue === "xp") {
        message.reply("XP command required your level in a number. Each star is 100 levels, plus the samll number next to it.\nEx. If you are bronze border with 2 stars and level 91\n**!xp 291**")

        } else if (firstValue === "sr") {
            message.reply("SR commands requires your SR rank in a number form. If you are less then 500 sr, I would advise to guess the closest number.\nEx. !sr 2231")

        } else if (firstValue === "all") {
            message.reply("```**Current Command List**\n-!help\n-!xp\n-!srbronze\n-!srsilver\n-!srgold\n-!srplat\n-!ping```")

        } else {
            message.reply("Command not found, please reinput command with correct values.")

        }
        
        
    }
}

    



