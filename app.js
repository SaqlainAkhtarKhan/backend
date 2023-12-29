 const express = require('express')
 const app = express()

 app.get('/',(req,res)=>{
    res.jason({
        mesg:'Hello'
    })
 })

 app.listen(3000)