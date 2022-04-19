console.log("=== Website Basic ===");

// Importando o Express e Criando sua Aplicacao
const app = require("express")();

// Configurando o Express
app.set("view engine", "pug");
app.set("views", `${__dirname}`);

// Adicionando Rotas (Controladoras)
// Servir um HTML diretamente => má prática!
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/sobre", (req, res) => {
  res.sendFile(`${__dirname}/sobre.html`);
});

app.get("/fale-conosco", (req, res) => {
  const filePath = `${__dirname}/fale-conosco.html`;
  res.sendFile(filePath);
});

app.get("/produtos", (req, res) => {
  res.render("produtos");
});

// Subindo a Aplicacao
const port = 8000;
app.listen(port, () => { 
  console.log(`App running at port ${port}...`); 
});
