const db = require("../infra/dbConnection")("infra/lojavirtual.db");

exports.getProducts = (req, res) => {
  res.end("ADMIN LIST!");
};

exports.addProduct = (req, res) => {
  res.render("admin/addProduct");
};

exports.saveProduct = (req, res) => {
  const { product, image, price, stars } = req.body;

  const sql = `INSERT INTO 
                  products (name, image, price, stars) 
               VALUES
                  ('${product}', '${image}', ${price}, ${stars});`;

  db.run(sql, (err) => {
    if(err) res.end("Erro ao salvar os dados!");
    res.redirect("/admin/add?success=true");
  });
};
