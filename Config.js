const fs = require('fs')
const chalk = require('chalk')
//contact details
global.ownernumber = ['918617845264']
global.ownername = "‎✘𝗦𝗿𝗲𝗲𝗷𝗶𝘁🍷✘"//owner name
global.ytname = "YT: 𝗥𝘂𝗽"
global.socialm = "GitHub: Official-Rup"
global.location = "Indian"

global.botname = '𝘀𝗲𝘅𝘆-𝘀𝗮𝗺𝗮🍷𝙼𝙳 ⚠︎' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘𝘀𝗲𝘅𝘆-𝘀𝗮𝗺𝗮🍷𖨆✘𓆪_✰'
global.packname = 'Sticker By'
global.author = '𝗦𝗿𝗲𝗲𝗷𝗶𝘁|𝗥𝘂𝗽🍷'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Rup Pvt Ltd."

//theme link
global.link = 'no links here'

//custom prefix
global.prefa = ['-']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*❤️𝘀𝗲𝘅𝘆-𝘀𝗮𝗺𝗮🍷𝙼𝙳 ⚠︎🎀*\n\n*🧩 Bot link:* \n.....\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
