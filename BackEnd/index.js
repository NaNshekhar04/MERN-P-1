require('dotenv').config();
const express = require('express');
const app = express();


app.use(function(req, res, next){
    console.log(req.path, req.method);
    next();
})

app.get('/', function(req, res){
    res.json({msg: 'Welcome to Home Screen !'})
})

app.listen(process.env.Port, function(){
    console.log('Server Up and running at port', process.env.PORT);
})
