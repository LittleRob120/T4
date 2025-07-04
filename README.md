# Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias

## Sobre o Projeto

Este sistema foi desenvolvido para facilitar o cadastro, atualização, consulta e análise de clientes, produtos e serviços de pet shops e clínicas veterinárias. O sistema possui uma interface web moderna (frontend em React) e um backend robusto em Java Spring Boot, com cada unidade podendo operar sua própria base de dados em memória.

O projeto foi inspirado pelo crescimento do setor pet no Brasil, que mesmo diante de cenários econômicos adversos, segue em expansão, conforme destacado pelo Instituto Pet Brasil (IPB). O setor apresenta mudanças progressivas nos hábitos das famílias, com aumento nas vendas e destaque para o comércio eletrônico e serviços especializados para animais de estimação.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Funcionalidades do Sistema](#funcionalidades-do-sistema)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Visão Geral

O Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias foi criado para otimizar o controle de informações essenciais do setor pet, permitindo que cada unidade gerencie seus próprios dados de forma independente e eficiente. O sistema opera com uma interface web intuitiva, proporcionando facilidade de uso, leveza e fácil adaptação a diferentes ambientes.

---

## Tecnologias Utilizadas

### Frontend
- React 18+
- Bootstrap

### Backend
- Java 17+
- Spring Boot
- H2 Database (em memória)

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm
- Java 17+

### Instalação e Execução

#### Backend

```sh
cd pl
# No Windows:
mvnw.cmd spring-boot:run
# No Linux/Mac:
./mvnw spring-boot:run
```
O backend ficará disponível em [http://localhost:32831](http://localhost:32831).

#### Frontend

```sh
cd front
npm install
npm start
```
Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Estrutura do Projeto

```
T4/
  pl/           # Backend Java Spring Boot
    src/
    pom.xml
    ...
  front/        # Frontend React
    src/
    public/
    package.json
    ...
  executavel/
    pl.jar      # Executável do backend (opcional)
```

---

## Padrões de Desenvolvimento

- **Componentização:** O frontend é organizado em componentes reutilizáveis.
- **Hooks do React:** Uso de useState, useEffect e outros hooks para gerenciamento de estado.
- **Responsividade:** Layout adaptável para diferentes tamanhos de tela.
- **Banco de Dados em Memória:** Cada unidade pode operar sua própria base de dados, garantindo independência e segurança dos dados.
- **Código Limpo e Documentado:** Facilita manutenção e evolução futura.

---

## Funcionalidades do Sistema

- Cadastro, atualização e consulta de clientes
- Cadastro, atualização e consulta de produtos (em expansão)
- Cadastro, atualização e consulta de serviços (em expansão)
- Exclusão de clientes com confirmação
- Relatórios e análises básicas do perfil de consumo (em expansão)
- Feedback ao usuário em todas as operações

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para o branch (`git push origin feature/nome`)
5. Abra um Pull Request

---

## Contato

Desenvolvido para o setor pet brasileiro - 2025  
Documentação criada para uso interno e treinamento de colaboradores.
