const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://ceeptalg:O-gXT4JYCsy1xx792v0HFOijGRHOsg5j@jelani.db.elephantsql.com/ceeptalg"
  },
  migrations: {
    directory: path.join(__dirname, "server", "api", "db", "migrations")
  },
  seeds: {
    directory: path.join(__dirname, "server", "api", "db", "seeds"),
  }

};
