import conn from "../config/conn.js";

const tableMotorista = /*sql*/ `
    CREATE TABLE IF NOT EXISTS motorista (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        data_nascimento DATE NOT NULL,
        numero_carteira varchar(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;
conn.query(tableMotorista, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela " + err.stack);
    return;
  }
  console.log(result);
  console.log(field);
  console.log("Tabela [Motorista] criada com sucesso");
});
