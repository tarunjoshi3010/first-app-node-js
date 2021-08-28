const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000//hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//host  (include ports)
console.log(myUrl.host);

//host name 
console.log(myUrl.hostname);


//path name 
console.log(myUrl.pathname);


//serialized query  
console.log(myUrl.search);

//search param gives object of params
console.log(myUrl.searchParams);

//add param  
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// looping through param
myUrl.searchParams.forEach((value,name) => console.log(`${value} - ${name}`));