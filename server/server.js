const express = require("express")

const app = express()


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server is runing at port ${port}`) 
})