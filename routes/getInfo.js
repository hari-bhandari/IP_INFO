const express =require('express')
const geoip=require('geoip-lite')
const emojiFlags=require('emoji-flags')
const router=express.Router();
router.get('/',async(req,res)=>{
    let getIp=req.ip.substr(7)
    if(getIp===''){
        res.send('Something went wrong')
    }
    const info=geoip.lookup(getIp)
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
router.get('/:ip',async(req,res)=>{
    let sent=false
    let getIp=req.ip.substr(7)
    if(req.params.ip){
        const providedIp=req.params.ip
        if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(providedIp)){
            getIp=providedIp
        }else{
            sent=true
            res.send('Invalid IP provided')
        }


    }
    if(!sent){
        const info=geoip.lookup(getIp)
        const countryInfo=emojiFlags.countryCode(info.country)
        res.status(200).json({
            ip: getIp,
            countryName: countryInfo.name,
            countryCode: info.country,
            city: info.city,
            dialCode: countryInfo.dialCode,
            timezone: info.timezone,
            location: {
                lat: info.ll[0],
                lng: info.ll[1],
            },
            emoji: {
                emoji: countryInfo.emoji,
                emojiUnicode: countryInfo.unicode
            },
            flagUrl: `${req.protocol}://${req.get('host')}/flag/${info.country.toLowerCase()}.svg`,
            url: `${req.protocol}://${req.get('host')}`

        })
    }



})
module.exports=router;