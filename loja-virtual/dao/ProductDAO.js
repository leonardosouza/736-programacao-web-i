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

  save(data, callback) {
    const { product, image, price, stars } = data;

    this.db.run(`INSERT INTO 
                    products (name, image, price, stars) 
                 VALUES
                    ('${product}', '${image}', ${price}, ${stars});`, callback);
  }

  update(callback) {
    // this.db.run(`UPDATE products...`, callback); 
  }
}

module.exports = (conn) => new ProductDAO(conn);
