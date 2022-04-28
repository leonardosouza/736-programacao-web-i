// Importar o módulo do SQLite
const sqlite = require("sqlite3").verbose();

// Criar a instância do banco de dados
const db = new sqlite.Database("./loja-virtual.db");

db.on("trace", (...args) => {
  console.log("TRACE:", args);
});

console.log("db:", db);

// Executar a instrução SQL

const sqlInsert = `INSER INTO produtos (id, nome, preco, quant) VALUES (8, 'Livro Node', 20, 100);`;
db.run(sqlInsert, (err) => {
  // if(err) process.exit();
  console.log(err);
  console.log("Registro inserido com sucesso!");
});

const sqlUpdate = `UPDATE produtos SET nome = 'Livro HTML' WHERE id = 7;`
db.run(sqlUpdate, (err) => {
  if(err) process.exit();
  console.log("Registro atualizado com sucesso!");
});

const sqlDelete = `DELETE FROM produtos WHERE id = 8`;
db.run(sqlDelete, (err) => {
  if(err) process.exit();
  console.log("Registro excluído com sucesso!");
});

const sqlSelect = `SELECT * FROM produtos;`;
db.all(sqlSelect, (err, rows) => {
  console.log("err:", err);
  console.log(rows);
});

db.close();
