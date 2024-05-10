# NunesSports

Projeto com operações CRUD para criação de um produto utilizando React e .NET utilizando Domain-Driven Design


## Pré-requisitos

- .NET 8
- SQL Server
- Node.js
- npm

## Instalação

1. **Backend:**

   ```bash
   # Navegue até o diretório do backend
   cd backend/
   
   # Realizar migration no gerenciador de pacotes
   Update-Database
   
   # Restaure as dependências
   dotnet restore
   
   # Inicie o servidor
   dotnet run --project NunesSports.API

   ```
   
2. **Frontend:**

   ```bash
   # Navegue até o diretório do frontend
   cd frontend/

   # Instale as dependências
   npm install

   # Inicie o servidor
   npm start
   ```
   

