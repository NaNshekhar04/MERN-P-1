const express = require('express');
const app = express();
const port = 3500;

app.listen(port, function(err){
    if(err){
        console.log(`Error in running up the Server` + err);
    }else{
        console.log(`Server Up and running at port :: ${port}`);
    }
})