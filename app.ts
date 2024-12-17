import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Post from "./models/post";

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

dotenv.config();
const dbURI = process.env.MONGO_URI;
if (!dbURI) {
    throw new Error("dbURI undefined");
}

mongoose.connect(dbURI)
.then((result)=>{
    app.listen(5000, ()=>{
        console.log("App is listening on port 5000");
    })
}).catch((error)=>{
    console.log(error);
})


app.get('/', (req:Request, res:Response)=>{
    res.render('index')
})
app.post('/submit', (req:Request, res:Response)=>{
    try {
        const post = new Post(req.body);
        const result = post.save(); 
        res.render('index');
    } catch (error) {
        console.log(error);        
    }    
})