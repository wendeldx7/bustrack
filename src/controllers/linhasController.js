import conn from "../config/conn.js"
import {v4 as uuidv4} from 'uuid'

export const getLinhas = (request, response)=>{
    const sql = `SELECT * FROM linhas`
    conn.query(sql, (err, data)=>{
        if(err){
             response.status(500).json({message: "Erro ao buscar as linha"})
             return
        }
        const linhas = data
        response.status(200).json(linhas)
    })
}

export const criarLinhas = (request, response) => {

    const { nome_linha, numero_linha, itinerario } = request.body;

    if (!nome_linha) {
        response.status(400).json({ message: "O nome da linha é um campo obrigatório" });
        return;
      }
      if (!numero_linha) {
        response.status(400).json({ message: "numero da linha é um campo obrigatório" });
        return;
      }
      if (!itinerario) {
        response.status(400).json({ message: "O itinerário é um campo obrigatório" });
        return;
      }

      const id = uuidv4();
    const insertSQL = /*sql*/ ` INSERT INTO linhas (id, nome_linha, numero_linha, itinerario)
    VALUES
    ("${id}","${nome_linha}","${numero_linha}","${itinerario}")`;
    conn.query(insertSQL, (err) => {
      if (err) {
        console.error(err);
        response.status(500).json({ message: "Erro ao cadastrar a linha" });
        return;
      }
      response
        .status(201)
        .json({ message: "linha cadastrado com sucesso" });
    });


}