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
            message.reply("```asciidoc\n**Generation 2**\n----------------\nThe next wave of players and or advisors to join the Overwatch team\nThis wave of players has some good players and some meh players that\nstrive from improvement.\n\n**Members**\n- Eternalflame#11329 aka Keaton D : Local varsity Bronze player that \ncurrently still plays on the team during the 2021-2022 season\n- BoomHeadshot#11261 aka Tyler C : Widow one trick turned to Lucio one trick. \nDoesn't currently play on the team, however still resides in the discord\n- THATPERSON#11174 aka Sawyer S : A team member that used to be on the team,\nnow resides in the Expired Player realm\n- JRESHPN#1917 aka Jayden G : The man behind all the Chili's raid jokes\non being small. Currently is the JV Captain for the 2021-2022 season and has\na huge dps rank of: >500 SR\n- LordBeebe#1845 aka Bushard : Attractor of all men, the king of beard. The Overwatch\nAdvisor and the one behind the meetings making Varisty members cry.\n- Burning#12410 aka Evan M : The most recent person to leave the Overwatch team,\nwith being the most extreme of leaving the discord entirely. \n- RomancePlag#1626 aka Tori I : One of the few female gamers that decide to join the \noverwatch discord and team. Currently this player resides as a Expired Player,\nthat plans to join the team once again in the future.\n```")

        } else if (firstValue === "3") {
            message.reply("```asciidoc\n**Generation 3**\n----------------\nThe third wave of players to join the Overwatch team\nThis wave of players has some good players and some meh players that\nstrive from improvement.\n\n**Members**\n- DragahnFire#1602 aka Hudson F : The biggest support disappointment, Jokes aside\npart of the Varsity team in the 2021-2022\n- BigBoofus#1323 aka Daniel B : Part of the Varsity team in 2021-2022 season, the \nman behind the leak of Tyler H's address\n\n**LAW READY FOR THIS?!??!\n\n- Soop#11784 aka Tyler H : Part of the Varsity team in 2021-2022 season, the main\ncompetition for the sellout channel against Zachary. \n- DriftKing#11850 aka Silver P : Part of JV in 2021-2022 season, Likes to \ntake chips and pizza from a party\n- Pyrominx#1637 aka Aiden H : Part of JV in 2021-2022 season, man behind\nthe femboys of JV.\n- K1ngSw1ffer#1982 aka Aiden D :  Part of JV in 2021-2022 season, One of \nthe few non-femboys in the JV team and the beacon against the femboys.\n- DONT HAVE ADDED aka Brayden W : Part of JV in 2021-2022 season, by far the lankest person\njust beating the bean from Gen 1.\n- DONT HAVE ADDED aka Fabian L : Part of JV in 2021-2022 season, Not much to say\nbesides uh.... Practice more?\n- AbsoluteNova#11755 aka Steven S : Part of JV in 2021-2022 season, Legit just Skydoesminecraft.\nAbuse against his GF, and his beard.\n- JBersB#11159 aka John B : Part of JV and Varsity in 2021-2022 season, the meme of the entire team,\nin the way of Kobra Kei, even if he is not Asian, He is build different, and deserves\nto be in a maximum secure prison\n```")


        } else {
            message.reply("Command not found, please reinput command with correct values.")

        }
        
        
    }
}

    



