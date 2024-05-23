import pkg from 'pg';
const {Pool} = pkg;
import dotenv from 'dotenv';
dotenv.config();
console.log("salida de env", process.env.DATABASE_URL);
const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
})

export default pool;