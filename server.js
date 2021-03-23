/*const http = require("http")
const fs = require("fs")
const port = 8080

const server = http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/html"})
fs.readFile("index",function(error,data){
    if (error){
        res.writeHead(404)
        res.write("error")
    }else{
        res.write(data)
    }
    res.end()
})

})*/

const server = require('server');
const { get, post } = server.router;
 

server({ port: 8000 }, [
  get('/', ctx => "index" ),
  post('/', ctx => {
    console.log(ctx.data);
    return 'ok';
  })
]);

app.get('/index', function(req, res) {
  res.render('pages/index');
  

});



console.log("localhost:8000")
