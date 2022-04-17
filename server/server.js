require('dotenv').config();
const express=require('express');
// require('./DB')
// const cors = require('cors');
const app=express();

app.listen(process.env.PORT)
app.get('/',(req,res)=>res.send('server is up!'))