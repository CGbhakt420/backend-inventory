import pool from '../db/pool.js';

export const getAllItems = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM items');
  res.render('item', { title: 'Items', items: rows });
};

export const createItem = async (req, res) => {
  const { name, quantity, price, category_id } = req.body;
  await pool.query('INSERT INTO items (name, quantity, price, category_id) VALUES ($1, $2, $3, $4)', [name, quantity, price, category_id]);
  res.redirect('/items');
};

export const editItem = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  await pool.query('UPDATE items SET name = $1, quantity = $2, price = $3 WHERE id = $4', [name, quantity, price, id]);
  res.redirect('/items');
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM items WHERE id = $1', [id]);
  res.redirect('/items');
};
