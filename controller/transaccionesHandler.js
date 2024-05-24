import Post_Transferencia from "../models/Post_Transferencia.js";
import Get_Transferencias from "../models/Get_Transferencias.js";
export const postTransferencia = async (req, res) => {
    try {
        const postData = req.body;
        const insertData= await Post_Transferencia(postData);
       res.status(200).json({estado:'OK', insert: insertData.rows});
    } catch (error) {
        res.status(500).json({ error: "Error al crear  nueva transferencia" });
    }
}
 export const getTransferencias = async (req, res) => {
  try {
      const getData = await Get_Transferencias();
      res.status(200).json({result: getData.rows});
  } catch (error) {
      res.status(500).json({ error: "Error al obtener transferencias realizadas" });
  }
} 
