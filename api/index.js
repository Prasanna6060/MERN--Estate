import express from 'express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';

dotEnv.config();

mongoose.connect(process.env.MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

mongoose.connection.on('error', err => {
    console.error("MongoDB connection error:", err);
});

const app = express();

app.use(express.json());


const port = 3000;

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    "success": false,
    statusCode,
    message
  })
});