import pool from "../config/db.js";

const Get_Transferencias = async () => {
    let client
    const consulta = {
        name: 'get-Transferencias',
        text: `
        Select t.id, u.nombre as emisor, r.nombre as receptor, t.monto,t.fecha
        from transferencias t
        Join usuarios u on t.emisor = u.id 
        Join usuarios r on t.receptor = r.id
        `,
    }
    try {
        client = await pool.connect();
        const resultado = await client.query(consulta);
        return resultado;
    } catch (error) {
        return console.error('Error al obtener transferencias', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Get_Transferencias;