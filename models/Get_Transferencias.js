import pool from "../config/db.js";

const Get_Transferencias = async(transferencia)=> {

    let client
    const consulta = {
        name: 'get-Transferencias',
        text: 'SELECT * FROM transferencias',
    }
    try {
        client = await pool.connect();
        const resultado = await client.query(consulta);
        return resultado;
    } catch (error) {
        return console.error('Error al obtener las transferencias realizadas', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}

export default Get_Transferencias;