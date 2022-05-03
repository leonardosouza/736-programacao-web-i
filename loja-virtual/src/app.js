// Criando a Aplicação no Express
const app = require("express")();

// Config da Aplicação
require("../config/store.js")(app);

// Routes
require("../routes/store.js")(app);

// Startup da Aplicação
const PORT = process.env.PORT ?? 7000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));
