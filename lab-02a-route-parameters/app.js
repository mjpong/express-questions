const express = require('express')

let app = express();

app.get('/header/:title', function(req,res){
    let title = req.params.title
    res.send("<h1>" + title + "</h1>")
    // res.sed(`<h1>$(title)</h1>`)
})

app.get('/add/:num1/:num2', function(req,res){
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let sum = (num1 + num2)
    res.send(sum)
})

app.get('/shorten/:text', function(req,res){
    let text = req.params.text;
    if (text.length <=10){
        res.send(text);
    } else {
        let slicedString = text.slice(0,text.length -3);
        slicedString = slicedString + "..."
        res.send(slicedString);
    }
})

module.exports = app
