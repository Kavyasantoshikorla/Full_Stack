import http from 'http';
const port = 4000;
const server = http.createServer((req,res)=>{
    console.log(req.method);
    if((req.url === "/users"))
    {
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({name:"kavya"}));
    }
    else
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Hello this is backend");
    }
});
server.listen(port,()=>{
    console.log(`server running at port ${port}`)
})