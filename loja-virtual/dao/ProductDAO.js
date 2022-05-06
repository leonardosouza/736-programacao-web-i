class ProductDAO {
  constructor(conn) {
    this.db = conn;
  }

  findById(id, callback) {
    this.db.all(`SELECT * FROM products WHERE id = ${id};`, callback);
  }

  findAll(callback) {
    this.db.all(`SELECT * FROM products;`, callback);
  }

  findWhere(field, value, callback) {
    this.db.all(`SELECT * FROM products WHERE ${field} LIKE '%${value}%';`, callback);
  }

  save(callback) {
    // this.db.run(`INSERT INTO products...`, callback);
  }

  update(callback) {
    // this.db.run(`UPDATE products...`, callback); 
  }
}

module.exports = ProductDAO;
