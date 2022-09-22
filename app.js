const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.get('', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, (res)=> {
    console.log("Server started at port 3000");
})
