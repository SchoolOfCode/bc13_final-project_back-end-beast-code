import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/routes.js';
import { MongoClient } from "mongodb";

dotenv.config()

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);
const database = client.db("beastcodeDB");
export const bardata = database.collection("bardata")

const PORT = process.env.PORT | 3000;

export const app = express();
app.use(express.json());
app.use('/api/router', router)

app.listen(PORT, () => {
    console.log(`Server Started on Port ${3000}`)
})
