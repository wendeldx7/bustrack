### **Modelo de Dados**

1. **Linha de Ônibus**:
    - Nome da linha
    - Número da linha
    - Itinerário
2. **Motorista**:
    - Nome
    - Data de nascimento
    - Número da carteira de habilitação
3. **Ônibus**:
    - Placa
    - Modelo
    - Ano de fabricação
    - Capacidade

### **Rotas da Aplicação**








4. **GET /linhas/{id_linha}**:
    - Descrição: Esta rota permite visualizar as informações de uma linha de ônibus específica.
    - Funcionalidade: Visualização de Linha de Ônibus
    - Método HTTP: GET
    - Parâmetros da URL: ID da linha.
    - Resposta: Nome da linha, número da linha e itinerário.
5. **GET /motoristas/{id_onibus}**:
    - Descrição: Esta rota permite visualizar as informações de um motorista específico.
    - Funcionalidade: Visualização de Motorista
    - Método HTTP: GET
    - Parâmetros da URL: ID do ônibus.
    - Resposta: Nome, data de nascimento e número da carteira de habilitação.

7. **PUT /linhas/{id_onibus}**:
    - Descrição: Esta rota permite atualizar as informações de uma linha de ônibus específica.
    - Funcionalidade: Atualização de Linha de Ônibus
    - Método HTTP: PUT
    - Parâmetros da URL: ID da linha.
    - Corpo da Requisição: Pode conter nome da linha, número da linha e/ou itinerário.
8. **DELETE /motoristas/{id_onibus}**:
    - Descrição: Esta rota permite deletar um motorista específico da plataforma.
    - Funcionalidade: Deletar Motorista
    - Método HTTP: DELETE
    - Parâmetros da URL: ID do ônibus.








6. **GET /onibus/{id_onibus}**:
    - Descrição: Esta rota permite visualizar as informações de um ônibus específico.
    - Funcionalidade: Visualização de Ônibus
    - Método HTTP: GET
    - Parâmetros da URL: ID do ônibus.
    - Resposta: Placa, modelo, ano de fabricação, capacidade, linha e motorista associados.

    

1. **POST /linhas**:
    - Descrição: Esta rota permite que os usuários cadastrem novas linhas de ônibus na plataforma.
    - Funcionalidade: Cadastro de Linha de Ônibus
    - Método HTTP: POST
    - Corpo da Requisição: Deve conter nome da linha, número da linha e itinerário.

    2. **POST /motoristas**:
    - Descrição: Esta rota permite que os usuários cadastrem novos motoristas na plataforma.
    - Funcionalidade: Cadastro de Motorista
    - Método HTTP: POST
    - Corpo da Requisição: Deve conter nome, data de nascimento e número da carteira de habilitação.

    
3. **POST /onibus**:
    - Descrição: Esta rota permite que os usuários cadastrem novos ônibus na plataforma.
    - Funcionalidade: Cadastro de Ônibus
    - Método HTTP: POST
    - Corpo da Requisição: Deve conter placa, modelo, ano de fabricação, capacidade, linha e motorista


9. **GET /linhas**:
    - Descrição: Esta rota permite visualizar todas as linhas de ônibus cadastradas na plataforma.
    - Funcionalidade: Listagem de Linhas de Ônibus
    - Método HTTP: GET
10. **GET /motoristas**:
    - Descrição: Esta rota permite visualizar todos os motoristas cadastrados na plataforma.
    - Funcionalidade: Listagem de Motoristas
    - Método HTTP: GET
11. **GET /onibus**:
    - Descrição: Esta rota permite visualizar todos os ônibus cadastrados na plataforma.
    - Funcionalidade: Listagem de Ônibus
    - Método HTTP: GET