import dotenv from 'dotenv';
dotenv.config({path:'../../.env'});
import express from "express";

const app = express();

const PORT = process.env.PORT_PRIMARY_SERVER;
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});