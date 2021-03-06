const express=require('express')
const path=require('path')
const cors=require('cors')
const dotenv=require('dotenv')
////////////////////////////////
const app=express()
////////////////////////////////
app.set('trust proxy',true);
dotenv.config({path:'./config/config.env'})
const PORT= process.env.PORT||5000
app.use(cors())
app.use('/ip',require('./routes/getIp'))
app.use('/getIpInfo',require('./routes/getInfo'))


app.use(express.static(path.join(__dirname,'public')))
const server=app.listen(PORT,console.log(`server running in Production mode on port ${PORT}`))
app.use(express.static('client/build'));

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
);
//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});
