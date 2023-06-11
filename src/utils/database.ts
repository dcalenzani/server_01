import { Pool } from "pg";

let conn: any;

//Update to your own credentials
if (!conn) {
  conn = new Pool({
    user: "postgres",
    password: "postgres"||"",
    host: "localhost",
    port: 5432,
    database: "server_01",
  });
}

export { conn };