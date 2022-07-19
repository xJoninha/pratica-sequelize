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

Instalar todas as dependências com `npm install` (dentro da pasta 'server').

Rodar o servidor com `npm run dev`.

No Workbench, após ativar o MySQL via xampp, executar a seguinte query para criar nosso BD:

```sql
CREATE DATABASE pratica_sequelize;
```

## Conexão com o BD

Criar o arquivo .sequelize com o seguinte contéudo

```js
const path = require("path");

module.exports = {
  config: path.resolve("./database/config", "config.json"),
  "models-path": path.resolve("./database/models"),
  "seeders-path": path.resolve("./database/seeders"),
  "migrations-path": path.resolve("./database/migrations"),
};
```

```sh
npx sequelize init
```

No arquivo server/database/config.json, deixaremos o conteúdo da seguinte maneira:

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "pratica_sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "pratica_sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "pratica_sequelize",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Models

Vamso criar os models a partir do sequelize-cli.

### Model User

```sh
# MODEL USER
npx sequelize-cli model:generate --name User --attributes nome:string,sobrenome:string,email:string

# MODEL STATUS
npx sequelize-cli model:generate --name Status --attributes titulo:string

#MODEL TODO
npx sequelize-cli model:generate --name Todo --attributes nome:string,resumo:string,descricao:string
```

Veja que os models não só foram criados, como também os arquivos de migration, e o próprio sequelize criou os campos id, createdAt e updatedAt nas migrations.

| IMPORTANTE: repare que temos nos arquivos de migrations os métodos `up` e `down` - o método `up` é executado quando rodamos uma migration enquanto o método `down` é executado quando desfazemos (undo) uma migration. Por isso é importante que todo método `down` realmente desfaça o que está sendo feito pelo método `up` (no caso, o método `up` cria uma tabela e o método `down` a apaga).

Para rodarmos a migration, vamos executar no terminal o seguinte comando (dentro da pasta server):

```sh
npx sequelize-cli db:migration
```

```sql
-- CREATE DATABASE pratica_sequelize;
USE pratica_sequelize;

DESCRIBE sequelizemeta;
SELECT * FROM sequelizemeta;

DESCRIBE users;
SELECT * FROM users;

DESCRIBE todos;
SELECT * FROM todos;

DESCRIBE statuses;
SELECT * FROM statuses;
```

## Seeders

```sh
# SEEDER USER
npx sequelize-cli seed:generate --name mock-users

# SEEDER STATUS
npx sequelize-cli seed:generate --name mock-statuses

# SEEDER TODO
npx sequelize-cli seed:generate --name mock-todos
```