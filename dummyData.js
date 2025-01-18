import pool from './db/pool.js';

async function seedDatabase() {
  // Delete existing data
  await pool.query('DELETE FROM items');
  await pool.query('DELETE FROM categories');

  // Insert categories and get the inserted IDs
  const { rows: categoryRows } = await pool.query(`
    INSERT INTO categories (name) VALUES 
      ('Electronics'),
      ('Furniture')
    RETURNING id, name;
  `);

  // Map the inserted categories to their ids
  const electronicsId = categoryRows.find(category => category.name === 'Electronics').id;
  const furnitureId = categoryRows.find(category => category.name === 'Furniture').id;

  // Insert items with valid category_ids
  await pool.query(`
    INSERT INTO items (name, quantity, price, category_id) VALUES 
      ('Laptop', 10, 500, ${electronicsId}),
      ('Chair', 15, 150, ${furnitureId});
  `);

  console.log('Database seeded with dummy data');
  pool.end();
}

seedDatabase();
