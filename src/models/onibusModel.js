import conn from "../config/conn.js";

const tableOnibus = /*sql*/`
    CREATE TABLE IF NOT EXISTS onibus (
        id VARCHAR(255) PRIMARY KEY,
        placa varchar(255) not null,
        modelo varchar(255) not null,
        ano_fabricacao year(4) not null,
         capacidade int not null,
         motorista_id varchar(255) not null,
         linhas_id varchar(255) not null,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      
        foreign key (motorista_id) references motorista(id),
        foreign key (linhas_id) references linhas(id)
    )
`;
conn.query(tableOnibus, (err, result, field) => {
  if (err) {
    console.error("Erro ao criar a tabela " + err.stack);
    return;
  }
  console.log(result);
  console.log(field);
  console.log("Tabela [Onibus] criada com sucesso");
});
