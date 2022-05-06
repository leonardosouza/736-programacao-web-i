const adminController = require("../controllers/admin");

module.exports = (app) => {
  app.get("/admin/list", adminController.getProducts);

  app.get("/admin/add", adminController.addProduct); // formulário

  app.post("/admin/add", adminController.saveProduct); // salvar o produto
}
