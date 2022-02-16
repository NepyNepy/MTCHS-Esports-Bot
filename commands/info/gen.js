const { DiscordAPIError } = require("discord.js")

module.exports = {
    name: "gen",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix, Discord}) => {

        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array


        if (firstValue === "1") {
        message.reply("```asciidoc\n**Generation 1**\n----------------\nGeneration 1 is the very start of the eSports team.\nThis group of people are the ones who started the schools \nspark by competing at Boise State in 2019.\nThis generation also happens to be mostly still\nintact, and all members of this generation will\ngraduate this year in 2022.\n\n\n**Members**\n- DayDream#11566 aka Jenny C : One of two females in this generation\nboth happen to be the main support players at the time. Currently\nshe is still playing in the eSports team being the captain during\nthe 2020-2022 seasons. \n- TrashCant#1424 aka Tyra P : The other female of this generation\nlike said before was a support main for the team. This player\nto be known doesn't like the game to such a degree that they\nhaven't been on overwatch in a long time.\n- BeyondBeta#1188 aka Bennett A : This player was one of the DPS\nplayers of the team, that liked playing Hanzo, and Widow at the time.\nThis is the only player that offically has been kicked out of the team\ndue to actions of not playing the game, and actions against other team members.\n- Marioxl360#1400 aka Andrew P : This was the other DPS player of the time,\nlike above he also played a sniper called Ashe. This players was one\nof the nicest out of the members however, he doesn't play the game\nmuch anymore.\n- Mstriustoad1(Cody) aka Cody W : This is the start of our tank players of the team.\nDuring his time with the team he was the highest ranking player that out team had, also\nthe best off tank the team might have seen until the 2022 season. His old name on the game\nhappened to be Cody, and he gets on the game every so often depending who is playing with him.\n- FEMNeptune#1744 aka Zachary C : The other tank player of the team that mains Reinhardt. He currently\nis the eSports officer and still plays with the team today. The mighty beacon that likes\nto get himself killed.\n\n```")

        } else if (firstValue === "2") {
            message.reply("SR commands requires your SR rank in a number form. If you are less then 500 sr, I would advise to guess the closest number.\nEx. !sr 2231\n\nIf base !sr command doesn't work use backs aka !srbronze, !srsilver, etc.")

        } else if (firstValue === "3") {
            message.reply("```**Current Command List**\n-!help\n-!xp\n-!sr\n-!srbronze\n-!srsilver\n-!srgold\n-!srplat\n-!srdiamond\n-!srmasters\n-!ping```")

        } else {
            message.reply("Command not found, please reinput command with correct values.")

        }
        
        
    }
}

    



