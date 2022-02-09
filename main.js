/*
Hello! Welcome to my project on making a discord bot for the MTCHS Esports teams! To get started I should explain who and what this bot is for.
This bot was the start of an idea for the second project in second semister for senior year for me (2022). I wasn't fully a fan of trying to continue
the games the school as already made for the arcade machine we have in haley hall. So, I decided to ask if I could make a discord bot for the esports teams.
I was kinda surprised to see it accepted so here we are a bot in js, that most likely will have some python who knows. 

This bot is for the Overwatch Team, League of Legends Team, and Rocket League Team. This can grow and shrink depending on the studnets who continue the esports line at the school.
For the testing discord join this link https://discord.gg/SMfwtUWuz4.
For anything that invloves the discord developer portal please email me at zacharyn.chrysler@gmail.com
*/


// Required to have the constant Discord communicate to all of the node Modules
const Discord = require('discord.js')

// Connects to .env to make the information a global but hidden varible that can be used anywhere in the code with "process dotenv"
require("dotenv").config()

//
const generateImage = require("./generateImage")

// The Bots Token will be used in different areas see the end of this file for more information on if the token breaks.
// The reason why this is commented out is because of .env Use this to trouble shoot when needed.
//const TOKEN = "OTM1OTA1Mzk3NTAyNTE3MjY4.YfFb0w.rfXgioMFNEUxY510LBGSRcAI9ig";

// Creating our "bot" by making a clinet
const client = new Discord.Client({
    intents: [
        "GUILDS", 
        "GUILD_MESSAGES", 
        "GUILD_MEMBERS"
    ]
})

// Information that the bot has access to, part being the creature and possible future editiors of the bot. Please do not remove the id number in the "Owners Section"
// If this project goes to new Seniors please contact me on discord or via email at QT_NepyNepy#4416 or zacharyn.chrysler@gmail.com
let bot = {
    client,
    prefix: "!",
    owners: ["206826675277791232"]
}

// These two will store commands and events that we can pull out of later when being used. Make sure to know the difference between commands and events and don't mix the two in each folder.
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

/*
* Testing line of code to have the bot send a message on startup *In Console*
*/
// client.once('ready', () => {
//     console.log('MTCHS Esports Bot online!')

// });

// This is the very basic starter command that can be hidden once tested
// client.on("messageCreate", (message) => {
//     if (message.content == "hi"){
//         message.reply("Hello World!")
//     }

// })

// Constant of the #welcome channel id in the testing discord the other discords when added will have constants below.
const welcomeChannelId = "937733371470168144"

//This from what I understand will read all the channels located on the discord server and find the constant id in 'welcomeChannelId' and send a ping to the person that joined.
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})


// Login to the discord bot using the bots token from the developer portal email if the token doesnt work -> zacharyn.chrysler@gmail.com
// KEEP AT THE END
client.login(process.env.TOKEN)
