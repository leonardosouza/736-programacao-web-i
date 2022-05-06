const path = require("path");
const sqlite = require("sqlite3");

module.exports = (filePath) => new sqlite.Database(path.resolve(filePath));
