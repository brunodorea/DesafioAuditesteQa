# Desafio Auditeste - Automação com Cypress

## 1. Informações do Projeto
Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- Linguagem: Javascript
- Framework: Cypress

## 2. Como executar

### Pré-requisitos

- Node.js
- npm
- IDE (VSCode)

### Executando testes

1. Clonar este repositorio
2. Instalar as dependências -> `npm install`
3. Criar o arquivo `cypress.env.json` com as seguintes informações validas de login na aplicação:
   ```json
   {
    "EMAIL":"seu_email",
    "PASSWORD":"sua_senha"
   }
   ```
4. Executar os testes -> `npx cypress run test`

## 3. Plano e estratégia de testes

Realizar o fluxo de login, adicionar um item no carrinho e remover item do carrinho.

## 4. Report

Foi utilizado o `mochawesome` para geração do report.

Após a execução do teste com o comando `npx cypress run test` o report é gerado o arquivo `index.html` na pasta `cypress/reports/html`.
