// importando o express
const express = require("express");
// console.log(express);

// criando sua aplicação
const app = express();
// console.log(app);

// adicionando rotas
app.get('/', (req, res) => {
  console.log(req.headers["user-agent"]);
  res.send("Servidor com Express!");
});

// configurando a porta
const port = 3001;
app.listen(port, () => console.log(`Server running at ${port}...`));
