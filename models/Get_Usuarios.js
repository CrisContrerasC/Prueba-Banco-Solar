import pool from "../config/db.js";
const Get_Usuarios = async() => {
    let client
    const consulta = {
        name: 'get-Usuarios',
        text: 'SELECT * FROM usuarios',
    }
    try {
        client = await pool.connect();
        const resultado = await client.query(consulta);
        return resultado;
    } catch (error) {
        return console.error('Error al obtener los usuarios', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Get_Usuarios;