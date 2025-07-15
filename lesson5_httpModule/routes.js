const http = require('http');
const server = http.createServer((request, response)=>{
    const url = request.url;
    if(url === '/'){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.send("Home page");
    }
    else if(url === '/projects'){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.end("Projects page");
    }
    else{
        response.writeHead(404, {"Content-Type":"text/plain"});
        response.end("Page not found");
    }
});

server.listen(3000, ()=>{
    console.log("Server is listening");
})