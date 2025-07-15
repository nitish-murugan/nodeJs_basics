const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("Hello, This is from Node JS http module");
});

server.listen(3000, ()=>{
    console.log("Server is listening");
});
