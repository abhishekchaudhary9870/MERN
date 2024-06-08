<<<<<<< HEAD
const express = require('express');



const app = express();

app.get('/products',(req, res)=>{
    console.log('Request Received')
    res.send('<h1>Welcome! get</h1>')
});




app.post('/products',(req, res)=>{
    res.send('<h1>Welcome! post</h1>')
})




app.patch('/products',(req, res)=>{
    res.send('<h1>Welcome! patch</h1>')
})




app.delete('/products',(req, res)=>{
    res.send('<h1>Welcome! delete</h1>')
})

app.listen(1400);




=======
const express = require('express');



const app = express();

app.get('/products',(req, res)=>{
    console.log('Request Received')
    res.send('<h1>Welcome! get</h1>')
});




app.post('/products',(req, res)=>{
    res.send('<h1>Welcome! post</h1>')
})




app.patch('/products',(req, res)=>{
    res.send('<h1>Welcome! patch</h1>')
})




app.delete('/products',(req, res)=>{
    res.send('<h1>Welcome! delete</h1>')
})

app.listen(1400);




>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
