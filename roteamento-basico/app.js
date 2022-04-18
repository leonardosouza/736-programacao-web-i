console.log("=== Routing Basic ===");

// Importando o Express
const express = require("express");

// Criando sua Aplicacao
const app = express();

// Roteamento
/*
CRUD      - Ações      - HTTP METHODS / VERBS
Create    - Criar      - POST
Retrieve  - Recuperar  - GET
Update    - Atualizar  - PUT (Completa) / PATCH (Parcial)
Delete    - Excluir    - DELETE
*/

// Create
app.post("/", (req, res) => {
  console.log("POST - Request received...");
  res.send("POST - Request resolved!");
});

// Retrieve
app.get("/", (req, res) => {
  console.log("GET - Request received...");
  console.log(req.headers["user-agent"], req.headers["custom-header"], req.headers["authorization"]);
  console.log(res.getHeaders());
  res.send("GET - Request resolved!");
}); 

// Update Complete
app.put("/", (req, res) => {
  console.log("PUT - Request received...");
  res.send("PUT - Request resolved!");
}); 

// Update Partial
app.patch("/", (req, res) => {
  console.log("PATCH - Request received...");
  res.send("PATCH - Request resolved!");
}); 

// Delete
app.delete("/", (req, res) => {
  console.log("DELETE -  Request received...");
  res.send("DELETE - Request resolved!");
}); 

// Subindo a Aplicacao
const port = 7000;
app.listen(port, () => { 
  console.log(`App running at port ${port}...`); 
});
