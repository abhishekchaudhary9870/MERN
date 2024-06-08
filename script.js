const fs = require("fs");
const http = require("http");

const data=fs.readFileSync('./data.json','utf-8');
// console.log(data)
// console.log(typeof(data))
const dataobj=JSON.parse(data);
// console.log(dataobj);
const products=dataobj.products;
// console.log(typeof(products))
// console.log(products);

const htmltemplate=
`<!DOCTYPE HTML>
<html lang="en>
<head></head>
<body>
<div>
_PRODUCTSCARDS_
</div>

</body>
</html>

`
// IMP===DONT FORGET TO USE STRING LITERALS

// console.log(htmltemplate)
// console.log(cardtemplate)
const page=htmltemplate;

// console.log(page)

const myServer = http.createServer((req, res) => {
  console.log("request received");

//   console.log(req.url);
//   console.log(Object.keys(req));
  res.writeHead(200, {
    "content-type": "text/html",
})

     res.end(myServer);
});

myServer.listen(1400, () => {
  console.log("========server started=====");
});





const cardtemplate=
`
<div class="product-cards">
    <h4>TITLE__</h4>
    <P>INFO__</P>
</div>
`