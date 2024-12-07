const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("Middleware");
    next();
})
app.get("/", function(req, res){
    res.send("Welcome to Express JS")
})
app.get("/about", function(req,res){
    res.send("Express is a framework of Javascript")
})

app.get("/profile", function(req, res,next){
    return next(new Error("Something went wrong"))
})
// Error Handling
app.use((err,req,res,next) =>{
    console.error(err.stack)
    res.status(500).send("Error Handing")
})

app.listen(3000)