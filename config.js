const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

IMG: process.env.IMG=`https://telegra.ph/file/42fb2edb5ad99be61c501.jpg`,
CAPTION: process.env.CAPTION=`> *VISHWA-MD SESSION-ID*\n\n_🪄 ᴅᴏɴ'ᴛ ꜱʜᴀʀᴇ ʏᴏᴜʀ ꜱᴇꜱꜱɪᴏɴ ɪᴅ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ_`,
//----------------------------------------------------------------------------------------
// Mevvata Mega Acc ekak hadala eke emaill pass dnn one
EMAIL: process.env.EMAIL=`musicwow163@gmail.com`,
PASS: process.env.PASS=`v22@v22@v22`,
    
};
