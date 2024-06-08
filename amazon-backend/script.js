const express = require('express')
const productRouter = require('./routes/productsRoutes')
const userRouter = require('./routes/userRoutes.js');
const reviewRouter = require('./routes/reviewsRoutes.js');
const app = express();
const test = require('./models/productsModel.js')
const test1 =require('./models/userModel.js');
const test2 =require('./models/reviewsModel.js');
const mongoose = require('mongoose')
app.use(express.json());
app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
app.use('/api/reviews',reviewRouter);
const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.cy9dmdb.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const databaseUser = 'chaudharyabhishek9675';
const databasePassword = 'Abhi987083';
const databaseName = 'Amazon-Backend';


let dbLink = url.replace("$_USERNAME_$",databaseUser);
 dbLink = dbLink.replace("$_PASSWORD_$",databasePassword);
 dbLink = dbLink.replace("$_DB_NAME_$",databaseName);



mongoose.connect(dbLink)
.then(
    ()=> console.log('-----------------Database Connected-----------------')
);





app.listen(1400, 
()=>console.log('--------app started----------')
)