import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import categoryRouter from './routes/categories.js';
import pool from './db/pool.js';
import itemRouter from './routes/items.js';
import dotenv from 'dotenv';
dotenv.config();  // This should be before any other code

console.log('DB_USER:', process.env.DB_USER);  // Check if it outputs the correct value
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_HOST:', process.env.DB_HOST);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));


app.use('/categories', categoryRouter);
app.use('/items', itemRouter);


app.get('/', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM categories');
      res.render('index', { title: 'Inventory Home', categories: rows });
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).send('Server Error');
    }
  });

app.listen(5007, ()=>console.log("Server running"));