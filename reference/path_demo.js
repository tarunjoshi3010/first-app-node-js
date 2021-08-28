const path = require('path');

//get base file name
console.log(`file full name with path ----> ` + __filename);
console.log(`file name ----> ` + path.basename(__filename));

//Directory name
console.log(`directory name ----> ` + path.dirname(__filename));

//extention

console.log(`extention name ----> ` + path.extname(__filename));

//create path object

console.log(path.parse(__filename));

//create base from  object

console.log(path.parse(__filename).base);

//concatenate

console.log(path.join(__dirname,'test','hello.html'));