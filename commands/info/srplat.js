module.exports = {
    name: "srplat",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array

        let SecondValue = Number(firstValue)

        if (SecondValue < 3000 && SecondValue > 2499) {
            let ThirdValue = Math.ceil(((3000 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current plat placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)
            
        } else {
            message.reply(`The number you have entered is out of range for this skill rating, please type the number again, or make sure you are in the area of **Plat** for this command`)

        }
        
    }

}