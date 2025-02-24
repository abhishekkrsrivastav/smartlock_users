import mysql from 'mysql2/promise'
 
const db = mysql.createPool({
  host: "151.106.103.101",
  user: "webinfinity_slock",
  password: "8a?[{-5Nno8n",
  database: "webinfinity_smartlock",
  // host: "localhost",    DB_HOST
  // user: "root",          DB_USER
  // password: "root@123#",  DB_PASS
  // database: "final",       DB_NAME
  // host:process.env.HOST,
  // user:process.env.USER,
  // password:process.env.PASS,
  // database:process.env.NAME,
});

export default db;
