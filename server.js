var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/rr',function(req,res){
    res.send("vhfjvgbfgv");
})
app.post('/postrr',function(req,res){
console.log("Post request");
res.send('post response');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})