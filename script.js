const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from Node.js', function(err){
//     if (err) {
//         console.log(err);
//     }
//     console.log('File created');
// });

// fs.appendFile('hello.txt', ' Appending something', function(err){
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('File appended');
//     }
// });

// fs.rename('hello.txt', 'nodeFile.txt', function(err){
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('File renamed');
//     }
// });

//read file
// fs.readFile('nodeFile.txt', 'utf8', function(err, data){
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// })

//HTTP module

const http = require('http');
const server = http.createServer(function(req, res){
    res.end('Hello from Node.js');
})
server.listen(3000);