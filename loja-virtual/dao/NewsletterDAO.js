class NewsletterDAO {
  constructor(conn) {
    this.db = conn;
  }

  save(data, callback) {
    const { email } = data;
    this.db.run(`INSERT INTO newsletter (email) VALUES ('${email}');`, callback);
  }
}

module.exports = (conn) => new NewsletterDAO(conn);
