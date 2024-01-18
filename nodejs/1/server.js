const http = require('http');

const app = http.createServer((req, res) =>{
    res.write("Hi user you are the following URL\n")
    res.write("URL:http://localhost:3000")
    res.write(req.url)
    res.write("\n");
    res.write("Method:");
    res.end(req.method);
})

app.listen(3000, ()=>{
    console.log("Port is running on 3000");
})