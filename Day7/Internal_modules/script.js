// const fs= require('fs') ;
// const data = fs.readFileSync('./myReadMe.txt','utf-8');

// console.log(data);
// console.log(data.toString());
// const fs = require('fs')
// fs.writeFileSync('./logs.txt',"10th April 2024: Day 7")
// console.log(data.toString());

// const fs= require('fs') ;
// console.log('Start')
// const data = fs.readFile('./myReadMe.txt','utf-8');
// console.log(data);
// console.log('ENd')

//promises in file  System
// const fsPromises= require('fs/promises') ;
// console.log('Start')
// const pr= fsPromises.readFile('./myReadMe.txt','utf-8');
// console.log(pr)
// pr.then((res)=>{
//     console.log(res);
// })
// console.log('end')

// const fs = require('fs');
// const data = fs.readFile('./myReadMe.txt','utf-8',(err, data)=>{
// console.log(data);
// });

// const http = require('http');
// const app= http.createServer((req ,res)=>{
// console.log('request Received');
// console.log(req.url);
// res.end("Hello")
// });

// app.listen(1400);


// const http = require('http');
// const app= http.createServer((req ,res)=>{
// console.log('request Received');
// console.log(Object.keys(req));
// console.log(req.url);
res.writeHead(200,{
    'content-type':'text/html',
})
// res.end("<h1>The Great<br> Abhi</h1>")
// });

// app.listen(1400,()=>{
//     console.log('..........Server Started...........')
// });




//min-project

const http = require('http');
const fs= require('fs');
const data = fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data);

console.log(dataObj);
const products=dataObj.products;






const htmlTemplate= fs.readFileSync('./index.html',{encoding:'utf-8'});
const cardTamplate=fs.readFileSync('./card.html','utf-8')
// // const card1=cardTamplate
// .replace('_TITLE_',Product[0].title)
// .replace('_INFO',Product[0].description)
// const card2=cardTamplate
// .replace('_TITLE_',Product[1].title)
// .replace('_INFO',Product[1].description)
// const card3=cardTamplate
// .replace('_TITLE_',Product[2].title)
// .replace('_INFO',Product[2].description)

const allCards=products.map((elem)=>{
let newCard = cardTamplate;
newCard = newCard.replace('_TITLE_',elem.title)
newCard = newCard.replace('_INFO',elem.description)
newCard = newCard.replace('_IMG_',elem.images[0])
newCard = newCard.replace('rating',elem.rating)
return newCard;
});
const allCardsString = allCards.join('')
const page=htmlTemplate.replace('_PRODUCT_CARDS_',allCardsString);
const app= http.createServer((req ,res)=>{
console.log('request Received');
console.log(Object.keys(req));
console.log(req.url);
res.writeHead(200,{
    'content-type':'text/html',
})
res.end(allCardsString);
});

app.listen(1400,()=>{
    console.log('..........Server Started...........')
});









// const fs = require("fs");
// const http = require("http");

// const data=fs.readFileSync('./data.json','utf-8');
// // console.log(data)
// // console.log(typeof(data))
// const dataobj=JSON.parse(data);
// // console.log(dataobj);
// const products=dataobj.products;
// // console.log(typeof(products))
// // console.log(products);

// const htmltemplate=
// `<!DOCTYPE HTML>
// <html lang="en-US">
// <head></head>
// <body>
// <div>
// _PRODUCTSCARDS_
// </div>

// </body>
// </html>

// `
// // IMP===DONT FORGET TO USE STRING LITERALSnal_

// // console.log(htmltemplate)
// // console.log(cardtemplate)
// const page=htmltemplate;

// // console.log(page)

// const myServer = http.createServer((req, res) => {
//   console.log("request received");

// //   console.log(req.url);
// //   console.log(Object.keys(req));
//   res.writeHead(200, {
//     "content-type": "text/html",
// })

//      res.end(page);
// });

// myServer.listen(1400, () => {
//   console.log("========server started=====");
// });





// const cardtemplate=
// `
// <div class="product-cards">
//     <h4>TITLE__</h4>
//     <P>INFO__</P>
// </div>
// `





























