//////////////////////////////////////////
// PGSQL DB CONNECTION ESTABLISHED HERE //
//////////////////////////////////////////
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "pass",
    host: "localhost",
    port: "5432",
    database: "todo_db"
});

module.exports = pool;