# pratica sequelize

Prática de Sequelize (migrations, seeders, associations, etc.), Express, NodeJS.

## Iniciando o projeto

```sh
express server --view=ejs
```

```sh
cd server && npm i sequelize mysql2 --save && npm i nodemon sequelize-cli --save -D
```

**package.json**

```json
{
  // ...
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  }
  // ...
}
```

Instalar todas as dependências com `npm install` .

Rodar o servidor com `npm run dev`.
