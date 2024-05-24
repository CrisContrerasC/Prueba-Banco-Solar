import pool from "../config/db.js";
const Post_Transferencia = async (transferencia) => {
    let client;
    const values = Object.values(transferencia);
    const consulta = {
        name: 'insert-Transferencia',
        text: 'INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, $4) RETURNING *',
        values: values
    }
    try {
        client = await pool.connect();
        await client.query('BEGIN');
        const result = await client.query(consulta);
        const emisor = result.rows[0].emisor;
        const receptor = result.rows[0].receptor;
        const monto = result.rows[0].monto;
        // Actualizar tabla usuarios
        const descontar = {
            text: "UPDATE usuarios SET balance = balance - $2 WHERE id = $1",
            values: [emisor, monto],
          };

        const acreditar = {
            text: "UPDATE usuarios SET balance = balance + $2 WHERE id = $1",
            values: [receptor, monto],
          };
        await client.query(descontar);//Se descuenta el monto al emisor
        await client.query(acreditar);//Se acredita/suma el monto al receptor
        // Se cierra la transacción
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        return console.error('Error al insertar transferencia', error.code, error.stack, error.message);
    } finally {
        if (client) {
            client.release();
        }
    }
}
export default Post_Transferencia;
