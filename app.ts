import express, { Request, Response } from "express";
import dotenv from "dotenv";


const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

dotenv.config();
const dbURI = process.env.MONGO_URI;
