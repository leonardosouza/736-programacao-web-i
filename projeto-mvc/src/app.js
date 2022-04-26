// Criando a Aplicação Express
const app = require("express")();

// Config da Aplicação
require("../config/site")(app);

// Controllers
require("../controllers/site")(app);

// Startup da Aplicação
const port = process.env.PORT ?? 7000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}/`));
