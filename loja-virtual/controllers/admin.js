const conn = require("../infra/dbConnection")("infra/lojavirtual.db");
const productDAO = require("../dao/ProductDAO")(conn);

exports.getProducts = (req, res) => {
  res.redirect("admin/add");
};

exports.addProduct = (req, res) => {
  res.render("admin/addProduct");
};

exports.saveProduct = (req, res) => {
  productDAO.save(req.body, (err) => {
    if(err) res.end("Erro ao salvar os dados!");
    res.redirect("/admin/add?success=true");
  });
};
