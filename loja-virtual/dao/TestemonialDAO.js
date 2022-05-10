class TestemonialDAO {
  constructor(conn) {
    this.db = conn;
  }

  findAll(callback) {
    this.db.all(`SELECT * FROM testemonial;`, callback);
  }
}

module.exports = (conn) => new TestemonialDAO(conn);
