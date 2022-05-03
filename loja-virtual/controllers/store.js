const productsModel = require("../models/products");

exports.getHome = (req, res) => res.render("home");

exports.getAbout = (req, res) => res.render("about");

exports.getProducts = (req, res) => {
  res.render("products", productsModel);
}

exports.getWhyUs = (req, res) => res.render("why-us");

exports.getTestemonial = (req, res) => res.render("testemonial");
