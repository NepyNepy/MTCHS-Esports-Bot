const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: "streamers",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix, Discord}) => {


        message.reply("This team while growing in skill and gameplay, members have also grown their online profile aswell.\nTo watch these streams react to the Notifications role in the reaction-roles channel\nWhen ever a streamer goes live they will ping the role and share their twitch!")



        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        //let array = message.content.split(" ").slice(1).join(" ")

        //let firstValue = array


       // if (firstValue === "1") {
       // message.reply("")

        //} else if (firstValue === "2") {
        //    message.reply("")

       // } else if (firstValue === "3") {
        //    message.reply("")


       // } else {
       //     message.reply("Command not found, please reinput command with correct values.")

      //  }
        
        
    }
}

    



