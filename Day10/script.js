<<<<<<< HEAD
const express = require('express');
const fsPromises = require('fs/promises');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/usersRoute.js')
const app = express();

// const fs = require('fs');
const productController = require('./controllers/productsController.js')
const usersController = require('./controllers/usersController.js')
// const app = express();

app.use(express.json());
app.use((req, res ,next)=>{
        const time = new Date().toLocaleString();
        fsPromises.appendFile("./data.txt",req.url+'\t'+time+'\n');
        next();
    })
app.use('/api/products',productRouter)
// const productRouter = express.Router();
// const userRouter = express.Router();

// app.use('/api/products',productRouter)
app.use('/api/users',userRouter)




    
productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProduct);
productRouter.route('/:id')
.put(productController.replaceProduct)
.delete(productController.deleteProduct);
// userRouter
// .get(usersController.getUser)
// .put(usersController.replaceUser)
// .post(usersController.addUser)
// .delete(usersController.deleteUser);


    app.get('/api/products',productController.getAllProducts);
    app.post('/api/products',productController.addProduct);
    
    app.put('/api/products/:id', productController.replaceProduct);
            
            app.delete('/api/products/:id',productController.deleteProduct);

app.get('/api/products',usersController.getUser)
app.post('/api/products',usersController.addUser)
app.put('/api/products',usersController.replaceUser)
app.delete('/api/products',usersController.deleteUser)


app.listen(1400);
=======
const express = require('express');
const fsPromises = require('fs/promises');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/usersRoute.js')
const app = express();

// const fs = require('fs');
const productController = require('./controllers/productsController.js')
const usersController = require('./controllers/usersController.js')
// const app = express();

app.use(express.json());
app.use((req, res ,next)=>{
        const time = new Date().toLocaleString();
        fsPromises.appendFile("./data.txt",req.url+'\t'+time+'\n');
        next();
    })
app.use('/api/products',productRouter)
// const productRouter = express.Router();
// const userRouter = express.Router();

// app.use('/api/products',productRouter)
app.use('/api/users',userRouter)




    
productRouter.route('/')
.get(productController.getAllProducts)
.post(productController.addProduct);
productRouter.route('/:id')
.put(productController.replaceProduct)
.delete(productController.deleteProduct);
// userRouter
// .get(usersController.getUser)
// .put(usersController.replaceUser)
// .post(usersController.addUser)
// .delete(usersController.deleteUser);


    app.get('/api/products',productController.getAllProducts);
    app.post('/api/products',productController.addProduct);
    
    app.put('/api/products/:id', productController.replaceProduct);
            
            app.delete('/api/products/:id',productController.deleteProduct);

app.get('/api/products',usersController.getUser)
app.post('/api/products',usersController.addUser)
app.put('/api/products',usersController.replaceUser)
app.delete('/api/products',usersController.deleteUser)


app.listen(1400);
>>>>>>> 1fe195e9c2a3ab9e9f8d8cbfe8a76a2d1da9e009
    