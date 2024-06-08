<<<<<<< HEAD
const fs = require("fs");
const http = require("http");
const url = require('url');
const data = fs.readFileSync("./data.json");
const dataObj = JSON.parse(data).products;
const inputElement = `<form action='/product'>
<input type="text" name="productName"></input>
<button type="submit">Search</button>
</form>`
const cardTemplate = `
<head>
<style>
.product-card{
    background-color:orange;
    margin:16px 400px;
    opacity:0.5;
}
body{
    background-color:black;
    text-align:center;
}
.product-card:hover{
border-radius:300px;
    opacity:10;
}
.z{
    text-decoration:none;
    color:white;
   
    background-color:black;
}

</style>



</head>



<body>

<div class="product-card">

<h2 class="c">$$$$$</h2>
<img src="tag">
<h3>${`Price:`}price</h3>
<h3>${`Rating:`}q</h3>
<h3>${`Stock:`}stock</h3><br>
<a href="$t$" class="z">BUY</a>
</div>
</body>`;




let result = [];
for(let i=0;i<dataObj.length;i++){
    let temp = cardTemplate;
    temp = temp.replace('price',dataObj[i].price)
    temp = temp.replace('q',dataObj[i].rating)
    temp = temp.replace('stock',dataObj[i].stock)
    temp = temp.replace('$$$$$',dataObj[i].title)
    temp = temp.replace('tag',dataObj[i].images[0])
    temp = temp.replace('$t$',`/product?id=${i}`);
    // temp = temp.replace('$t',`/home`)
    result.push(temp);
    
    
}
result = result.join(' ')
console.log(result);
const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'content-type':'text/html',
    })
    // const route = req.url;
    // console.log(route);
    const path = url.parse(req.url);
    const {pathname,query}= url.parse(req.url, true);
    console.log(query);
    if(pathname=='/home'){
        res.end(inputElement+result);
    } else if(pathname=='/product'){
        // const id = query.id;
        const pName = query.productName;
    //     if(id){
        
        
    //     const item = dataObj[id];

    //     res.end(`
    //     <head>
    //     <style>
    //     .u{
    //         background-color:orange;
    // text-align:center;

    // margin-top: 0px auto;
    // display: block;
    // margin-left: auto;
    // margin-right: auto;
    // width: 40%;
    //     }
    //     body{
    //         background-color:black;
    //     }
    //     .b{
    //         text-decoration:none;
            
    //     }
    //     .b:hover{
    //         background-color:red;
    //     }
    //     </style>
    //     </head>
    //     <div class="u">
        
    //     <h3>Brand: ${item.brand}</h3>
    //        <h4>${item.title}</h4>
    //        <img src="${item.images[0]}">
    //        <h3>"${item.description}"</h3>
    //        <h3>Price: ${item.price}</h3>
    //        <h3>Rating: ${item.rating}</h3>
    //        <h3>Stock: ${item.stock}</h3>
    //        <button  class="b"><a href="http://localhost:1400/home" style="text-decoration:none;" >Home</a></button>
    //     </div>
    //     `);
    // }
    //     else 
    if(pName){
            const searchName =dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                } else{
                    false;
                }
            })
            // console.log(searchName);
            res.end(JSON.stringify(searchName));
        } else{
            res.end('error......');
        }
        // res.end('Product Page'  +query.id);
    } 
    


    
    else{
        res.end('404 error')
    }
    // res.end(result);
});


server.listen(1400);

// const cards = 

=======
const fs = require("fs");
const http = require("http");
const url = require('url');
const data = fs.readFileSync("./data.json");
const dataObj = JSON.parse(data).products;
const inputElement = `<form action='/product'>
<input type="text" name="productName"></input>
<button type="submit">Search</button>
</form>`
const cardTemplate = `
<head>
<style>
.product-card{
    background-color:orange;
    margin:16px 400px;
    opacity:0.5;
}
body{
    background-color:black;
    text-align:center;
}
.product-card:hover{
border-radius:300px;
    opacity:10;
}
.z{
    text-decoration:none;
    color:white;
   
    background-color:black;
}

</style>



</head>



<body>

<div class="product-card">

<h2 class="c">$$$$$</h2>
<img src="tag">
<h3>${`Price:`}price</h3>
<h3>${`Rating:`}q</h3>
<h3>${`Stock:`}stock</h3><br>
<a href="$t$" class="z">BUY</a>
</div>
</body>`;




let result = [];
for(let i=0;i<dataObj.length;i++){
    let temp = cardTemplate;
    temp = temp.replace('price',dataObj[i].price)
    temp = temp.replace('q',dataObj[i].rating)
    temp = temp.replace('stock',dataObj[i].stock)
    temp = temp.replace('$$$$$',dataObj[i].title)
    temp = temp.replace('tag',dataObj[i].images[0])
    temp = temp.replace('$t$',`/product?id=${i}`);
    // temp = temp.replace('$t',`/home`)
    result.push(temp);
    
    
}
result = result.join(' ')
console.log(result);
const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'content-type':'text/html',
    })
    // const route = req.url;
    // console.log(route);
    const path = url.parse(req.url);
    const {pathname,query}= url.parse(req.url, true);
    console.log(query);
    if(pathname=='/home'){
        res.end(inputElement+result);
    } else if(pathname=='/product'){
        // const id = query.id;
        const pName = query.productName;
    //     if(id){
        
        
    //     const item = dataObj[id];

    //     res.end(`
    //     <head>
    //     <style>
    //     .u{
    //         background-color:orange;
    // text-align:center;

    // margin-top: 0px auto;
    // display: block;
    // margin-left: auto;
    // margin-right: auto;
    // width: 40%;
    //     }
    //     body{
    //         background-color:black;
    //     }
    //     .b{
    //         text-decoration:none;
            
    //     }
    //     .b:hover{
    //         background-color:red;
    //     }
    //     </style>
    //     </head>
    //     <div class="u">
        
    //     <h3>Brand: ${item.brand}</h3>
    //        <h4>${item.title}</h4>
    //        <img src="${item.images[0]}">
    //        <h3>"${item.description}"</h3>
    //        <h3>Price: ${item.price}</h3>
    //        <h3>Rating: ${item.rating}</h3>
    //        <h3>Stock: ${item.stock}</h3>
    //        <button  class="b"><a href="http://localhost:1400/home" style="text-decoration:none;" >Home</a></button>
    //     </div>
    //     `);
    // }
    //     else 
    if(pName){
            const searchName =dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                } else{
                    false;
                }
            })
            // console.log(searchName);
            res.end(JSON.stringify(searchName));
        } else{
            res.end('error......');
        }
        // res.end('Product Page'  +query.id);
    } 
    


    
    else{
        res.end('404 error')
    }
    // res.end(result);
});


server.listen(1400);

// const cards = 

>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
