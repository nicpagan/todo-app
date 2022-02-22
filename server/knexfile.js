const path = require("path");
require("dotenv").config();
const { 
  DATABASE_URL = "postgres://ceeptalg:O-gXT4JYCsy1xx792v0HFOijGRHOsg5j@jelani.db.elephantsql.com/ceeptalg" 
} = process.env;

module.exports = {

  development: {
    client: 'pg',
    connection: DATABASE_URL
  },
  migrations: {
    directory: path.join(__dirname, "server", "api", "db", "migrations")
  },
  seeds: {
    directory: path.join(__dirname, "server", "api", "db", "seeds"),
  }

};
