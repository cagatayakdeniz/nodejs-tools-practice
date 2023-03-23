const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Merhaba</h1>');
    res.end();
}).listen(5000);

