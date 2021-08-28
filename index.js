const http = require('http');
const path = require('path');
const fs = require('fs');
const { extname } = require('path');

const server = http.createServer((req, res) => {
    
    //first approach

    // console.log(req.url);
    // if(req.url === '/' ) {

    //     fs.readFile(path.join(__dirname, 'public','index.html'), (err, content) => {
    //         if(err) throw err;

    //         res.writeHead(200, {'Content-Type':'text/html'});
    //         res.end(content);
    //     })  
    // } else  if(req.url === '/about' ) {

    //     fs.readFile(path.join(__dirname, 'public','about.html'), (err, content) => {
    //         if(err) throw err;

    //         res.writeHead(200, {'Content-Type':'text/html'});
    //         res.end(content);
    //     })  
    // } else  if(req.url === '/api/users' ) {

    //     const users =[
    //         {name: 'Tarun', age: 31},
    //         {name: 'Arun', age: 21},
    //         {name: 'Varun', age: 41},

    //     ]

    //     res.writeHead(200, {'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users));
    // }




    // second approach


    //Build file path 
    let filePath = path.join(
        __dirname, 
        'public', 
        req.url === '/' ? 'index.html' : req.url
    );
    //Extension of file
    let extName = path.extname(filePath);

    //Initial content-type
    let contentType = 'text/html';

    // identify contentType
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
         case '.css':
            contentType = 'text/css';
            break;
         case '.json':
            contentType = 'application/json';
            break;
         case '.png':
            contentType = 'image/png';
            break;     
         case '.jpg':
            contentType = 'image/jpg';
            break;           
    }

    //Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code === 'ENOENT')  {
                // Page Not found
                fs.readFile(path.join(__dirname,'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.end(content, 'utf8');
                })
            } else {
                // some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, {'Content-Type' : contentType});
            res.end(content, 'utf8')
        }

    })

});

const PORT = process.env.PORT || 5000;
server.listen(PORT,  () => console.log(`Server running in port: ${PORT}`));