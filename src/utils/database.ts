import { Pool } from "pg";

let conn: any;

//Update to your own credentials
if (!conn) {
  conn = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 5432|| process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  });
}

export { conn };