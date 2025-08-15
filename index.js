require('dotenv').config()

const { log } = require('console');
const express = require('express');
const  app = express();
const port = 3000;

app.get('/', (req, res)=>{
   res.send('hello world')
})

app.get('/login', (req, res)=>{
    res.send('<h1>You are login</h1>')
})

app.listen (process.env.PORT, ()=>{
    console.log(`Server is running on ${port}`);
    
})