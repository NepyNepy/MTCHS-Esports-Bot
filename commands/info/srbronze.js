module.exports = {
    name: "srbronze",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, prefix}) => {

        // Option 1: message.content.split(" ")
        // Option 2: message.content.split(" ").slice(2).join(" ")

        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array

        let SecondValue = Number(firstValue)

        if (SecondValue < 1500 && SecondValue > 0) {
            let ThirdValue = Math.ceil(((1500 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current bronze placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)
            
        } else {
            message.reply(`The number you have entered is out of range for this skill rating, please type the number again, or make sure you are in the area of **Bronze** for this command`)

        }

        
        
        
    }
}

    



