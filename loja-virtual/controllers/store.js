const path = require("path");
const sqlite = require("sqlite3");
const db = new sqlite.Database(path.resolve("infra/lojavirtual.db"));

exports.getHome = (req, res) => res.render("home");

exports.getAbout = (req, res) => res.render("about");

exports.getProducts = (req, res) => {
  const sql = `SELECT * FROM products;`;
  db.all(sql, (err, rows) => {
    if(err) res.end("Erro ao consultar os dados!");
    console.log("SUCESS:", rows);
    res.render("products", { products: rows });
  });
}

exports.getWhyUs = (req, res) => res.render("why-us");

exports.getTestemonial = (req, res) => res.render("testemonial");

exports.getSearch = (req, res) => {
  console.log(req.query);
  const sql = `SELECT * FROM products WHERE name LIKE '%${req.query.q}%';`;
  console.log(sql);
  db.all(sql, (err, rows) => {
    if(err) res.end("Erro ao consultar os dados!");
    console.log("SUCESS:", rows);
    res.render("products", { products: rows });
  });
}
