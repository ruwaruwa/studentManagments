const express=require('express')
const app=express()
const dbConnection=require('./database/DBconnection')
//db connections
dbConnection()
app.listen(1000,async()=>{
    console.log('started !')
})


app.get('/',async(req,res)=>{
    res.send('app started !!!!!')
})