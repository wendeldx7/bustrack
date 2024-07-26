import conn from "../config/conn.js";

const tableLinhas = /*sql*/ `
    CREATE TABLE IF NOT EXISTS linhas (
        id VARCHAR(255) PRIMARY KEY,
        nome_linha varchar(255) not null,
        numero_linha int not null,
        itinerario varchar(255) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;
conn.query(tableLinhas, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela " + err.stack);
    return;
  }
  console.log(result);
  console.log(field);
  console.log("Tabela [Linhas] criada com sucesso");
});
