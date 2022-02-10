module.exports = {
    name: "sr",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let array = message.content.split(" ").slice(1).join(" ")

        let firstValue = array

        let SecondValue = Number(firstValue)

        if (SecondValue < 4000 && SecondValue > 3499) {
            let ThirdValue = Math.ceil(((4000 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current masters placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)
            
        }else if (SecondValue < 3500 && SecondValue > 2999) {
            let ThirdValue = Math.ceil(((3500 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current diamond placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)

        }else if (SecondValue < 3000 && SecondValue > 2499) {
            let ThirdValue = Math.ceil(((3000 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current plat placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)

        }else if (SecondValue < 2500 && SecondValue > 1999) {
            let ThirdValue = Math.ceil(((2500 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current gold placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)
            
            
        }else if (SecondValue < 2000 && SecondValue > 1499) {
            let ThirdValue = Math.ceil(((2000 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current silver placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)
        
        } else if (SecondValue < 1500 && SecondValue > 0) {
            let ThirdValue = Math.ceil(((1500 - SecondValue) / 25))
           // let FourthValue = Math.ceil(ThirdValue)
                message.reply(`Games need to rank up from current bronze placement is:\n\n ***${ThirdValue}***\n\n Expect a margin of error of 1-2`)
                
        }else {
            message.reply(`The number you have entered is out of range for this skill rating, please type the number again, or make sure you are in the area of **Master** for this command`)

        }
        
    }

}