const express =require('express')
const geoip=require('geoip-lite')
const emojiFlags=require('emoji-flags')
const router=express.Router();
router.get('/',async(req,res)=>{
    const getIp=req.ip.substr(7)
    const info=geoip.lookup("77.102.131.234")
    const countryInfo=emojiFlags.countryCode(info.country)
    res.status(200).json({
        ip:getIp,
        countryName:countryInfo.name,
        countryCode:info.country,
        city:info.city,
        dialCode:countryInfo.dialCode,
        timezone:info.timezone,
        location:{
            lat:info.ll[0],
            lng:info.ll[1],
        },
        emoji:{
            emoji:countryInfo.emoji,
            emojiUnicode:countryInfo.unicode
        },
        flagUrl:`${req.protocol}://${req.get('host')}/flag/${info.country.toLowerCase()}.svg`,
        url:`${req.protocol}://${req.get('host')}`

    })
})
module.exports=router;