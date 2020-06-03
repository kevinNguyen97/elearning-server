const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json())
//import postrouter
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth')

app.use('/posts',postsRoute);
app.use('/api/user',authRoute)

//routes
app.get('/', (req, res) => {
    res.send('home')
})




//conext to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to db')
    })


app.listen(5200,()=>{
    console.log('server up and running')
})