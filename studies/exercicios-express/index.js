const express = require('express')
const app = express()

app.use('/eai', (req, res)=>{
    res.send('<h1>Estou bem</h1>')
})

app.listen(3000, ()=>{
    console.log('backend executando')
})