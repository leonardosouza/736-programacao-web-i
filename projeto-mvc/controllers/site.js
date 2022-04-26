const customersModel = require("../models/customers");

module.exports = (app) => {
  // Rotas (Controllers) 
  app.get("/", (req, res) => res.render("homepage"));

  app.get("/customers", (req, res) => res.render("customers", customersModel));
}
