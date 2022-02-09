module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix}) => {

        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        message.reply("```Welcome to the MTCHS eSports Bot! Current commands for public use are listed in each sub-section.\n\n-!cmd xp\n\n-!cmd sr\n\n-!cmd all\n\nIf you have any questions contact QT_NepyNepy#4416 on discord```")

        

        
        
        
    }
}

    



