# Backend Template Typescript 

## Setup

### Typescript

```
npm i -D ts-node
```

### Convetional Commits

- fix
- feat
- BEAKING CHANGE
- chore

https://www.conventionalcommits.org/en/v1.0.0/


### ESLint & Prettier

ESLint

```
npm i -D prettier eslint
```

```
npx eslint --init
```

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON

Add on `.eslintrc.json`

```json
    "parserOptions": {
        "project": [
            "./tsconfig.json"
        ]
    }
```

Reload your screen..

Prettier

```json
{
    "semi": false,
    "singleQuote": false,
    "tabWith": 2
}
```

Configure Prettier & ESLint
```
npm i -D eslint-config-prettier
```

Add prettier in the end of the list of extends
```
  "extends": [
    ...
    "prettier"
  ],
```

Add scripts on `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.ts --fix",
  }
}
```
### Husky & Lint Staged (commit hooks)

```
npm i -D husky lint-staged
```

Add on `package.json`

```
"scripts": {
  "husky:prepare": "husky install"
}
```

Prepare config

```
npm run husky:prepare
```


Create `pre-commit` file

```
npx husky add .husky/pre-commit
```


### Jest

```
npm i -D jest @types/jest ts-jest
```

Create jest config `jest.config.js` file

```js


```


## Database

### Prisma

Initialize configuration

```sh
npx prisma init
```

Generate schemas

```
npx prisma generate --schema=./src/infra/database/prisma/schema.prisma
```

Format schema file

```sh
npx prisma format --schema=./src/infra/database/prisma/schema.prisma
```

Run migrate

```sh
npx prisma migrate dev --schema=./src/infra/database/prisma/schema.prisma
```
*It's not necessary to run for mongodb*

