# 🔐 Autenticação com React Hook Form e JSON Server  
**CheckPoint Front-end**

App simples com **Login** e **Cadastro** utilizando **React Hook Form**, **Tailwind CSS** e uma **API fake com JSON Server**.

---

## 🛠️ Tecnologias Utilizadas

- ⚡ **Vite + React 19 + TypeScript**  
- 🧭 **React Router**  
- 📝 **React Hook Form**  
- 🎨 **Tailwind CSS**  
- 🗃️ **JSON Server (API Fake)**  

---

## 📦 Requisitos

- **Node.js** `v18+` (recomendado `v20+`)  
- **npm**  

---

## ▶️ Como Rodar o Projeto

1. **Instalar dependências:**
   ```bash
   npm i
Iniciar a API fake (JSON Server):

bash
Copiar código
npm run api
Servidor disponível em: http://localhost:3001

Iniciar o app (Vite):

bash
Copiar código
npm run dev
Aplicação disponível em: http://localhost:5173

A rota inicial é /login.

🗃️ Estrutura da API (json-server)
O arquivo db.json (na raiz do projeto) contém:

json
Copiar código
{
  "usuarios": [
    { "id": "1", "nome": "Gabriel", "nomeUsuario": "gabriel", "email": "gabriel@exemplo.com" }
  ]
}
🔗 Endpoints Principais
GET http://localhost:3001/usuarios

GET http://localhost:3001/usuarios?nomeUsuario=ada&email=ada@exemplo.com

POST http://localhost:3001/usuarios (para cadastro)

🧭 Rotas do App
Rota	Descrição
/login	Tela inicial — formulário de login com nomeUsuario e email
/cadastro	Tela de cadastro com nome, nomeUsuario, email

Após o login bem-sucedido, o usuário é salvo em localStorage como usuarioLogado, e o cabeçalho mostra:

“Logado como: Nome” em todas as páginas.
