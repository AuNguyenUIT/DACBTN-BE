import express from 'express'
import  mongoose  from 'mongoose';
import data from './data.js'
import categoriesRouter from './routers/categoriesRouter.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/uesRouter.js';

const app= express();

mongoose.connect( 'mongodb://localhost/DACBTN', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use('/api/categories',categoriesRouter)
app.get('/',(req,res)=>{
    res.send("server san sang")
})
app.listen(8000,()=>{
    console.log("server at http://localhost:8000");
})