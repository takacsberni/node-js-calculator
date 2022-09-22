const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get('', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
})

app.post('/add', (req, res)=>{
    const nr1 = Number(req.body.num1);
    const nr2 = Number(req.body.num2);
    const sum = nr1 + nr2;
    res.send(nr1 + " + " + nr2 + " = " + sum);
})

app.post('/subtract', (req, res)=>{
    const nr1 = Number(req.body.num1);
    const nr2 = Number(req.body.num2);
    const sum = nr1 - nr2;
    res.send(nr1 + " - " + nr2 + " = " + sum);
})

app.post('/multiply', (req, res)=>{
    const nr1 = Number(req.body.num1);
    const nr2 = Number(req.body.num2);
    const sum = nr1 * nr2;
    res.send(nr1 + " * " + nr2 + " = " + sum);
})

app.post('/divide', (req, res)=>{
    const nr1 = Number(req.body.num1);
    const nr2 = Number(req.body.num2);
    const sum = nr1 / nr2;
    res.send(nr1 + " / " + nr2 + " = " + sum);
})

app.listen(3000, (res)=> {
    console.log("Server started at port 3000");
})
