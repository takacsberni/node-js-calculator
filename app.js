const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get('', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res)=>{
    const nr1 = Number(req.body.num1);
    const nr2 = Number(req.body.num2);
    const sum = nr1 + nr2;
    res.send('The sum of nr 1 and nr 2 is: ' + sum);
})

app.listen(3000, (res)=> {
    console.log("Server started at port 3000");
})
