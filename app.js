import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();


app.listen(5000, ()=>console.log("Server running"));