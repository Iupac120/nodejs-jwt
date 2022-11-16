require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const router = require('./routes/main')
const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('simple jwt basic')
})
app.use('/api/v1',router)
const start =()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`app is listening to ${PORT}`)
        })
    }catch(err){
        console.log(err)
    }
}
start()
