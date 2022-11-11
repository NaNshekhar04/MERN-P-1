require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/workouts');

//MIDDLEWARES!
app.use(express.json());

app.use(function (req, res, next) {
    console.log(req.path, req.method);
    next();
})
//START ROUTE!
app.use('/api/workouts', routes);

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
    .then(function () {
        app.listen(process.env.Port, function () {
            console.log('Server Up and running at port ::', process.env.PORT);
            console.log('SuccessFully connected to MongoAtlas !')
        })
    })
    .catch(function (err) {
        console.log('Connection to MongoAtlas Failed', err);
    })



