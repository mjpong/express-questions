const express = require('express');


//SET UP EXPRESS
let app = express();


//SET UP VIEW ENG
app.set('view engine', 'hbs')

//SET UP STATIC FILES
app.use(express.static('public'))

//ROUTES
app.get('/', function(req,res){
    res.render('index.hbs')
})

app.get('/about-us', function(req,res){
    res.render("about-us.hbs")
})

app.get('/multiply/:left/:right', function(req,res){
    let num1 = parseInt(req.params.left)
    let num2 = parseInt(req.params.right)
    let multiply = num1 * num2
    res.render('results.hbs', {
        "valueLeft": num1,
        'valueRight': num2,
        'results':multiply
    })
})

app.get('/gallery', function(req,res){
    res.send(`<img src = "dog.jpg"></img>`)
})



// this is so that we can test
module.exports = app;