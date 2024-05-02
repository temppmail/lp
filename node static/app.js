const express = require('express')
const app = express();



app.get('/',(req,res)=>{
    res.sendFile('./public/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./public/about.html',{root:__dirname})
})

app.get('/contact',(req,res)=>{
    res.sendFile('./public/contact.html',{root:__dirname})
})

app.use((req,res)=>{
    res.redirect('/')
})
app.listen(3000)