const conn = require("../infra/dbConnection")("infra/lojavirtual.db");

const ProductDAO = require("../dao/ProductDAO");
const productDAO = new ProductDAO(conn);

exports.getProducts = (req, res) => {
  productDAO.findAll((err, rows) => {
    if(err) res.end("Erro ao consultar os dados!");
    res.render("products", { products: rows });
  });
};

exports.searchProducts = (req, res) => {

  if(!isNaN(Number(req.query.q))) {
    
    productDAO.findById(Number(req.query.q), (err, rows) => {
      if(err) res.end("Erro ao consultar os dados!");
      res.render("products", { products: rows });
    });

  } else {
    
    productDAO.findWhere('name', req.query.q, (err, rows) => {
      if(err) res.end("Erro ao consultar os dados!");
      res.render("products", { products: rows });
    });

  }
};

exports.getHome = (req, res) => res.render("home");

exports.getAbout = (req, res) => res.render("about");

exports.getWhyUs = (req, res) => res.render("why-us");

exports.getTestemonial = (req, res) => res.render("testemonial");
