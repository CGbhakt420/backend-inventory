import pool from "../db/pool.js";

export const getAllCategories = async(req, res) => {
    const { rows } = await pool.query('SELECT * FROM categories');
    res.render('index', {title:'Categories', categories: rows});
}

export const createCategory = async(req, res) => {
    const {name} = req.body;
    await pool.query('INSERT INTO categories (name) VALUES ($1)', [name]);
    res.redirect('/categories');
}

export const editCategory = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    await pool.query('UPDATE categories SET name = $1 WHERE id = $2', [name, id]);
    res.redirect('/categories');
}

export const deleteCategory = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    await pool.query('DELETE FROM categories WHERE id = $1', [id]);
    res.redirect('/categories');
}