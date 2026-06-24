# Portfólio de Testes Automatizados com Cypress

## 📋 Visão Geral

Este repositório contém um portfólio de testes automatizados desenvolvido com Cypress, utilizando uma aplicação de e-commerce como ambiente de simulação de fluxo real.

O objetivo deste projeto é demonstrar boas práticas de automação de testes, incluindo:

* Automação de testes End-to-End (E2E) com Cypress
* Documentação de casos de teste
* Uso de assertions para validação de resultados esperados
* Geração automática de screenshots como evidência
* Relatórios de execução de testes
* Uso de `beforeEach()` para pré-condições reutilizáveis
* Organização de projeto seguindo boas práticas de QA Automation


## 🛠 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Mochawesome (Relatórios de testes)
* Git & GitHub

---

## ✅ Estratégia de Validação

Foram utilizadas **assertions** ao longo da suíte de testes para validar o comportamento esperado da aplicação.

Exemplos de validações:

* Visibilidade de elementos
* Validação de textos
* Validação de URL
* Validação de dados de produtos
* Navegação entre páginas

Exemplo:

```javascript id="9kq2vx"
cy.contains('Hammer').should('be.visible')

cy.url().should('include', ''https://practicesoftwaretesting.com/account'')

cy.xpath('//*[@id="first_name-error"]/div').first()
    .should('be.visible')
    .and('contain', 'First name is required')
```


## 📊 Relatórios de Teste

Os relatórios de execução são gerados após a execução dos testes e incluem:

* Testes aprovados
* Testes falhados
* Tempo de execução
* Screenshots
* Estatísticas gerais da execução

Os relatórios fornecem uma visão clara da qualidade da aplicação e auxiliam no acompanhamento dos testes.

---

## 📁 Estrutura do Repositório

```text id="m4x9qz"
project-root/
│
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js
│   │   ├── checkout.cy.js
│   │   ├── login.cy.js
│   │   └── produtos.cy.js
│   │ 
│   ├── fixtures/
│   │
│   ├── Reports/html
│   │   ├── screenshots
│   │   ├── videos
│   │   └── index.htm
│   │
│   └── screenshots/
│       └── Evidências de execução dos teste
│
├── docs/
│   ├── Casos-de-Teste/
│   └── Exportações-Confluence/
|
├── cypress.config.js
├── package.json
└── README.md
```
# 👨‍💻 Autor

**João Manoel**
QA Tester

[LinkedIn](www.linkedin.com/in/joão-ribeiro-32a90b352) • [GitHub](https://github.com/joaosouzar)

