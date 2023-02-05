const http = require('node:http')


const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/html"})
    res.end("Hello World")
})

server.listen(3000 ,()=>{
    console.log("server listening on port", 3000)
})