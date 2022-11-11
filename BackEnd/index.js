require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/workouts');

//MIDDLEWARES!
app.use(express.json());

app.use(function(req, res, next){
    console.log(req.path, req.method);
    next();
})

app.use('/api/workouts', routes);

//LISTENING FOR REQUESTS !

app.listen(process.env.Port, function(){
    console.log('Server Up and running at port', process.env.PORT);
})
