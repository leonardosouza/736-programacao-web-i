const conn = require("../infra/dbConnection")("infra/lojavirtual.db");
const productDAO = require("../dao/ProductDAO")(conn);
const testemonialDAO = require("../dao/TestemonialDAO")(conn);
const newsletterDAO = require("../dao/NewsletterDAO")(conn);

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

exports.getTestemonial = (req, res) => {
  testemonialDAO.findAll((err, rows) => {
    if(err) res.end("Erro ao consultar os dados!");
    res.render("testemonial", { testemonials: rows });
  });
};

exports.addEmail = (req, res) => {
  newsletterDAO.save(req.body, (err) => {
    if(err) res.end("Erro ao salvar os dados!");
    res.redirect("/?newsletter=success");
  });
};
