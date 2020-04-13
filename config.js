/** Common config for message.ly */

// read .env files and make environmental variables

require("dotenv").config();

// regular config
// const DB_URI = (process.env.NODE_ENV === "test")
//   ? "postgresql:///messagely_test"
//   : "postgresql:///messagely";

// weird home pc config
const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///messagely_test"
  : "postgres://postgres:postgres@localhost:5432/messagely";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};