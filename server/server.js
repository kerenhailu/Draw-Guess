require('dotenv').config();
require('./DB');
const express=require('express');
const cors = require('cors');
// const UsersRouter=require('./Routes/users-route');
const app=express();
const UsersRouter=require('./Routes/users-route')
// const port=process.env.PORT;
// const path=require('path');
app.use(cors());
app.use(express.json());
// const passport = require('passport');
// const passportMiddleware = require('./Config/passport');
// passportMiddleware(passport);

// app.use(passport.initialize());
app.use('/users', UsersRouter);

app.listen(process.env.PORT)
app.get('/',(req,res)=>res.send('server is up!'))