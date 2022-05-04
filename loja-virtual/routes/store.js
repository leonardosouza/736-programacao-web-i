const storeController = require("../controllers/store");
// const adminController = require("../controllers/admin");

module.exports = (app) => {
  app.get("/", storeController.getHome);

  app.get("/about", storeController.getAbout);
  
  app.get("/products", storeController.getProducts);
  
  app.get("/why-us", storeController.getWhyUs);
  
  app.get("/testemonial", storeController.getTestemonial);

  app.get("/search", storeController.getSearch);
}
