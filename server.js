const express = require('express')

const app=express()

app.use(express.json())

require('dotenv').config()

const PORT=process.env.PORT

app.listen(PORT, (err)=>{
    err? console.log(err)
    :
    console.log(`Server is running on PORT ${PORT}`)
})

//connect to db
const connect = require('./config/connectDB')

connect()

//require contact Router
app.use('/api/contacts', require('./routes/contactRoute'))