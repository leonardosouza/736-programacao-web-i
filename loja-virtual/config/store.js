const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

module.exports = (app) => {
  // Config do Arquivos Estáticos (css / imagens / js)
  app.use(express.static(path.resolve("public")));

  // Config da Template Engine
  app.set("view engine", "ejs");
  app.set("views", path.resolve("views"));

  // Config do Body Parser
  app.use(bodyParser.urlencoded());
}
