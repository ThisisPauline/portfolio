
import mysql from "mysql2/promise"
import dotenv from "dotenv";
dotenv.config()

const database = mysql.createPool({
    host: process.env.DB_HOST, 
    port: parseInt(process.env.PORT || process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });


export default database;