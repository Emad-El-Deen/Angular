const express=require('express');
const connectDB=require('./Config/dbConfig');
const userRouter=require('./Routers/userRouter');
const userTypeRouter=require('./Routers/userTypeRouter');
const cors=require('cors')
const projectRouter=require('./Utili/projectRouters')
const movieRouter = require('./Routers/movieRouter');


const port=3000;

const app=express();


app.use(express.json());
app.use(cors());
app.use('/images',express.static('./images'));

app.use('/projects',projectRouter)
app.use('/movies', movieRouter);
app.use('/userType',userTypeRouter);
app.use('/user',userRouter);


connectDB();
app.listen(port,_=>console.log('server started at port 3000'));
