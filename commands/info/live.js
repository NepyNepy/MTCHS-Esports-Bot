const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: "live",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix, Discord}) => {


        //message.reply("This team while growing in skill and gameplay, members have also grown their online profile aswell.\nTo watch these streams react to the Notifications role in the reaction-roles channel\nWhen ever a streamer goes live they will ping the role and share their twitch!")



        //Option 1: message.content.split(" ")
       // Option 2: message.content.split(" ").slice(2).join(" ")

        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array


       if (firstValue === "Quantum" || firstValue === "quantum") {
       message.reply("<@&948241734226292736> QuantumTrader is going live!\n" +  "https://www.twitch.tv/quantumtrader")

        } else if (firstValue === "Soop" || firstValue === "soop") {
           message.reply("<@&948241734226292736> YoItsSoop is going live!\n" + "https://www.twitch.tv/yoitssoop")

       } else if (firstValue === "EternalFlame" || firstValue === "Eternalflame" || firstValue === "eternalflame") {
           message.reply("<@&948241734226292736> EternalFlame is going live!\n" + "https://www.twitch.tv/eternalflame")

       } else if (firstValue === "DayDream" || firstValue === "Daydream" || firstValue === "daydream") {
        message.reply("<@&948241734226292736> DayDream is going live!\n" + "https://www.twitch.tv/daydream930")
       
       }  else if (firstValue === "BigBoofington" || firstValue === "Bigboofington" || firstValue === "bigboofington") {
        message.reply("<@&948241734226292736> BigBoofington is going live!\n" + "https://www.twitch.tv/bigboofington")
       
       }else {
           message.reply("Command not found, please reinput command with correct values.")

       }
        
        
    }
}

    



