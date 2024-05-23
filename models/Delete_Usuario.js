import pool from "../config/db.js";
const Delete_Usuario = async (id) => {

    let client
    try {
        client = await pool.connect();
        const result = await client.query('DELETE FROM usuarios WHERE id = $1', [id]);
        return result
    } catch (error) {
        return console.error('Error al eliminar usuario', error.stack);
    } finally {
        if (client) {
            client.release();
        }


    }
}

export default Delete_Usuario