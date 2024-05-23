import Post_Usuario from '../models/Post_Usuario.js';
import Get_Usuarios from '../models/Get_Usuarios.js';
import Delete_Usuario from '../models/Delete_Usuario.js';
import Put_Usuario from '../models/Put_Usuario.js';
export const postUsuario = async (req, res) => {
    try {
        const postData = req.body;
        const insertData = await Post_Usuario(postData);
        res.status(200).json({ estado: 'OK', insert: insertData.rows });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
}

export const getUsuarios = async (req, res) => {
    try {
        const getData = await Get_Usuarios();
        res.status(200).json({ result: getData.rows });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const id = req.query.id;
        console.log("Salida del id de usuario: ", id)
        const response = await Delete_Usuario(id);
        res.status(200).send(response.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al borrar el usuario" });
    }
}

export const putUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, balance } = req.body;
        const putData = await Put_Usuario({ id, nombre, balance });
        res.status(200).send(putData.rows);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
}




