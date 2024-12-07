const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine','ejs')
app.set('views', './views');

app.use(express.static(path.join(__dirname,'public')));

// app.get('/', function(req,res){
//     const sum = 2 + 2; // Define the value
//     res.render("index", {sum})
// })

// Routing

app.get('/profile/:username', function(req,res){
    res.send(`Welcome, ${req.params.username}` ) //localhost:3000/profile/ameerali
})
app.get('/profile/:username/:country', function(req,res){
    res.send(`Welcome, ${req.params.username} from ${req.params.country}` ) //localhost:3000/profile/ameerali/pakistan
})

app.listen(3000, function(){
    console.log("it is running")
})