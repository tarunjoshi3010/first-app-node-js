const fs = require('fs');
const path = require('path');


// create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('Folder created');
// });

// create and write to a file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'My name Tarun', err =>{
//     if(err) throw err;
//     console.log('File written to ...');
// });

// write to existing file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Age is 31', err =>{
//     if(err) throw err;
//     console.log('File written to ...');
// });


// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'My name Tarun', err =>{
//     if(err) throw err;
//     console.log('File written to ...');

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Age is 31', err =>{
//         if(err) throw err;
//         console.log('File written to ...');
//     });
// });

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) =>{
    if(err) throw err;
    console.log('Read file with data ...',data);
});

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) =>{
    if(err) throw err;
    console.log('Renamed..');
});