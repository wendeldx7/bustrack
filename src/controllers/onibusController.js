import conn from "../config/conn.js"
import {v4 as uuidv4} from 'uuid'



export const getOnibus = (request, response)=>{



    const sql = `SELECT placa, ano_fabricacao, modelo, capacidade, linhas_id, motorista_id FROM onibus`
    conn.query(sql, (err, data)=>{
        if(err){
             response.status(500).json({message: "Erro ao buscar os onibus"})
             return
        }
        const onibus = data
        response.status(200).json(onibus)
    
    })


    
}


export const criarOnibus = (request, response)=>{



  const { placa, ano_fabricacao, modelo, capacidade, linhas_id, motorista_id } = request.body;
  if (!placa) {
      response.status(400).json({ message: "O nome é um campo obrigatório" });
      return;
    }
    if (!ano_fabricacao) {
      response.status(400).json({ message: "O ano de fabricação é um campo obrigatório" });
      return;
    }
    if (!modelo) {
      response.status(400).json({ message: "O modelo é um campo obrigatório" });
      return;
    }
    if (!capacidade) {
      response.status(400).json({ message: "A capacidade é um campo obrigatório" });
      return;
    }
    if (!linhas_id) {
      response.status(400).json({ message: "O id da Linha é um campo obrigatório" });
      return;
    }
    if (!motorista_id) {
      response.status(400).json({ message: "O id do motorista é um campo obrigatório" });
      return;
    }


    





    const id = uuidv4();
  const insertSQL = /*sql*/ ` INSERT INTO onibus (id, placa, ano_fabricacao, modelo, capacidade, linhas_id, motorista_id)
  VALUES
  ("${id}","${placa}","${ano_fabricacao}","${modelo}","${capacidade}","${linhas_id}","${motorista_id}")`;
  conn.query(insertSQL, (err) => {
    if (err) {
      console.error(err);
      response.status(500).json({ message: "Erro ao cadastrar o onibus" });
      return;
    }
    response
      .status(201)
      .json({ message: "onibus cadastrado com sucesso" });

      console.log(datamt)

  }); 
}


export const editarOnibus = (request, response)=>{
  const {id} = request.params
  const { placa, ano_fabricacao, modelo, capacidade} = request.body;

  if (!placa) {
    response.status(400).json({ message: "O nome é um campo obrigatório" });
    return;
  }
  if (!ano_fabricacao) {
    response.status(400).json({ message: "O ano de fabricação é um campo obrigatório" });
    return;
  }
  if (!modelo) {
    response.status(400).json({ message: "O modelo é um campo obrigatório" });
    return;
  }
  if (!capacidade) {
    response.status(400).json({ message: "A capacidade é um campo obrigatório" });
    return;
  }


  const checkSql = /*sql*/`SELECT * FROM onibus WHERE id = "${id}"`
  conn.query(checkSql, (err, data)=>{
      if(err){
          console.error(err)
          response.status(500).json({msg:"Erro ao buscar o onibus"})
          return
      }
      if(data.length === 0){
          return response.status(404).json({msg: "onibus não encontrado"})
      }

      //placa, ano_fabricacao, modelo, capacidade, linhas_id, motorista_id
      const upadateSql = /*sql*/`UPDATE onibus SET
      placa = "${placa}", ano_fabricacao = "${ano_fabricacao}", modelo = "${modelo}",
      capacidade = "${capacidade}" 
      WHERE id = "${id}"`

      conn.query(upadateSql, (err)=>{
          if(err){
              console.error(err)
              response.status(500).json({msg: "Erro ao atualizar o onibus"})
              return
          }
          response.status(200).json({msg:"onibus atualizado"})
      })
  })
}