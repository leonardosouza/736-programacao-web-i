// Criando a Aplicação no Express
const app = require("express")();

// Config da Aplicação
require("../config/store")(app);

// Routes
require("../routes/store")(app);
require("../routes/admin")(app);

// Startup da Aplicação
const PORT = process.env.PORT ?? 7000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));
