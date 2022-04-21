// Importando o Express e Criando sua Aplicacao
const app = require("express")();

// Configurando o Express
app.set("view engine", "ejs");
app.set("views", `${__dirname}`);

// Encadeamento de métodos (Method Chain)
// objeto.metodo().metodo().metodo()

// objeto.metodo()
//        novoObjeto.metodo()
//                   outroObjeto.metodo()
/*
app
  .route("/site")
    .get((req, res) => {
      res.end("Rota: SITE GET!");
    })
    .post((req, res) => {
      res.end("Rota: SITE POST!");
    })
    .put((req, res) => {
      res.end("Rota: SITE PUT!");
    })
    .delete((req, res) => {
      res.end("Rota: SITE DELETE!");
    });
*/

// Adicionando Rotas (Controladoras)
app.get("/", (req, res) => {
  res.redirect("/site/");
});

app.get("/site", (req, res) => {
  res.render("site", { 
    titulo: "Meu Site", 
    links: [
      { title: "Produtos", href: "/site/produtos" },
      { title: "Cadastro", href: "/site/cadastro" },
      { title: "Login", href: "/site/login" },
    ] 
  });
});

app.get("/site/produtos", (req, res) => {
  // const tituloDaPagina = "Meus Produtos";
  const dados = { 
    titulo: "Meus Produtos",
    produtos: [
      {
        codigo: "0001",
        nome: "Tv Semp Toshiba",
        preco: 2060.45,
        quant: 10
      },
      {
        codigo: "0002",
        nome: "Ipad Apple",
        preco: 3999.90,
        quant: 40
      },
      {
        codigo: "0003",
        nome: "Galaxy S10",
        preco: 5999.90,
        quant: 100
      },
      {
        codigo: "0004",
        nome: "Microfone Fifine",
        preco: 399.90,
        quant: 10
      }
    ], 
  };

  res.render("produtos", dados);
});

app.get("/site/cadastro", (req, res) => {
  res.render("cadastro", { titulo: "Meu Cadastro" });
});

app.get("/site/login", (req, res) => {
  res.render("login", { titulo: "Meu Login" });
});

// Subindo a Aplicacao
const port = 8000;
app.listen(port, () => { 
  console.log(`App running at port ${port}...`); 
});
