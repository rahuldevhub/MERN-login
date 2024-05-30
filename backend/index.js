import express from 'express';
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import apifile from './routes/api.js'
import cors from 'cors';


mongoose.connect("mongodb://localhost:27017/test")

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST", "PUT", "DELETE"],
    credentials:true
}))

app.use('/', apifile)

app.listen(PORT, ()=> {console.log(`server running on ${PORT}`)});