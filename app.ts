import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Post from "./models/post";
import { formatDate } from "./public/time";

const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
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
    res.render('entry')
})

const getPost = async(req:Request, res: Response)=>{
    Post.find({contentType: 'dailies'})
    .sort({createdAt: -1})
    .then((result)=>{      
        res.render('dailies', {posts: result});        
    }).catch((error)=>{
        console.log(error);
    })
}
app.get('/dailies', getPost)
app.post('/submit', (req:Request, res:Response)=>{
    try {
        req.body.displayedDate = formatDate(new Date());
        console.log(req.body);
        
        const post = new Post(req.body);
        const result = post.save(); 
        res.render('entry');
        } catch (error) {
        console.log(error);        
    }    
})