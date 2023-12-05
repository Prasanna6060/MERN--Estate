import express from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import userRouter from './routes/user.routes.js'

dotEnv.config();

mongoose.connect(process.env.MONGOOSE).then(() =>{
    console.log("Connected to MongoDb");
}).catch(err => {
    console.log(err);
})


const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log("Server Listening on port" + port);
})

app.use('/api/user', userRouter );
