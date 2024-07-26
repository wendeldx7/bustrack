import conn from "../config/conn.js"
import {v4 as uuidv4} from 'uuid'

export const getMotorista = (request, response)=>{
    const sql = `SELECT * FROM motorista`
    conn.query(sql, (err, data)=>{
        if(err){
             response.status(500).json({message: "Erro ao buscar os motoristas"})
             return
        }
        const motoristas = data
        response.status(200).json(motoristas)
    })
}

export const criarMotorista = (request, response)=>{
    const { nome, data_nascimento, numero_carteira } = request.body;

    if (!nome) {
        response.status(400).json({ message: "O nome é um campo obrigatório" });
        return;
      }
      if (!data_nascimento) {
        response.status(400).json({ message: "Data de nascimento é um campo obrigatório" });
        return;
      }
      if (!numero_carteira) {
        response.status(400).json({ message: "A numero da carteira é um campo obrigatório" });
        return;
      }

      const id = uuidv4();
    const insertSQL = /*sql*/ ` INSERT INTO motorista (id, nome, data_nascimento, numero_carteira)
    VALUES
    ("${id}","${nome}","${data_nascimento}","${numero_carteira}")`;
    conn.query(insertSQL, (err) => {
      if (err) {
        console.error(err);
        response.status(500).json({ message: "Erro ao cadastrar o motorista" });
        return;
      }
      response
        .status(201)
        .json({ message: "motorista cadastrado com sucesso" });
    });
}




