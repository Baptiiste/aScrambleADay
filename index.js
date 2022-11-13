const rwClient = require("./twitterClient.js")
const CronJob = require("cron").CronJob
console.log("Script okk")
const tweetScramble = async () => {
    try{
        const mooves = ["F", "F'", "F2", "R", "R'", "R2","L", "L'", "L2", "B", "B'", "B2","U", "U'", "U2", "D", "D'", "D2"]
        const scrambleMin = 18
        const scrambleMax = 22
        const lengthScramble = Math.floor(Math.random()*(scrambleMax - scrambleMin) + scrambleMin)
        let nbrScramble = 0
        let scramble = ""
        while(nbrScramble < lengthScramble) {
            let idMoove = Math.floor(Math.random()*mooves.length)
            if(nbrScramble === 1 ){
                let lastMooveList = scramble.split(" ")
                let lastLetterMoove = lastMooveList[lastMooveList.length - 2].split("")[0]
                let newLetterMoove = mooves[idMoove].split("")[0]
                if(lastLetterMoove !== newLetterMoove){
                    nbrScramble++
                    scramble += mooves[idMoove] + " "
                }
            } else if(nbrScramble > 1){
                let lastMooveList = scramble.split(" ")
                let lastLetterMoove = lastMooveList[lastMooveList.length - 2].split("")[0]
                let beforeLastLetterMoove = lastMooveList[lastMooveList.length - 3].split("")[0]
                let newLetterMoove = mooves[idMoove].split("")[0]
                if(lastLetterMoove !== newLetterMoove && beforeLastLetterMoove !== newLetterMoove){
                    nbrScramble++
                    scramble += mooves[idMoove] + " "
                }
            } else {
                nbrScramble++
                scramble += mooves[idMoove] + " "
            }

        }

        await rwClient.v2.tweet("Try this scramble : " + scramble + ". Tell me your time in answer ! Format : [min]:[sec].[millisecond] or [sec].[millisecond].")

    } catch (e) {
        console.log(e)
    }


}


const job = new CronJob("0 11 * * *", () => {
    tweetScramble()
    console.log("done")
})
job.start()
