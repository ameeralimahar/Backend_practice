const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.set("view engine", "ejs");
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/',function(req, res){
    fs.readdir(`./files`, function(err, files){
        // console.log(files)
        res.render("index", {files: files})
    }) 
})
app.get('/files/:filename', function(req,res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err,filedata){
        res.render('show', {filename: req.params.filename, filedata: filedata})
        // console.log(filedata)
    })
})


app.get('/edit/:filename', function(req,res){
    res.render('edit', {filename: req.params.filename})
})

app.post('/edit', function(req,res){
    res.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect('/')
    })
})
app.post('/create',function(req, res){
    // console.log(req.body)
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect('/')
    })
})

app.listen(3000)