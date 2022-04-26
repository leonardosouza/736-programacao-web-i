const path = require("path");
const express = require("express");

module.exports = (app) => {
  // Config do diretório público (css / imagens / js)
  app.use( express.static(path.resolve("public")) );

  // Config da template engine
  app.set("view engine", "ejs");
  app.set("views", path.resolve("views"));
}
