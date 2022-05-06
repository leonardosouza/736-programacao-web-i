const storeController = require("../controllers/store");

module.exports = (app) => {
  app.get("/", storeController.getHome);

  app.get("/about", storeController.getAbout);

  app.get("/why-us", storeController.getWhyUs);
  
  app.get("/testemonial", storeController.getTestemonial);

  app.get("/products", storeController.getProducts);

  app.get("/search", storeController.searchProducts);
}
