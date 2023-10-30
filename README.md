# Nest API

## Descripción

Proyecto desarrollado para crear una API con NestJS para administrar peliculas de Star Wars. Se ha aplicado autenticación con JWT, testing unitario con JEST, arquitectura limpia y control de roles del usuario.

Se ha integrado SWAGGER para facilitar el uso de dicha API.

```
${PATH}/api
```

## Instalación

```bash

$  pnpm  install

```

## Configuración

IMPORTANTE: la aplicacación está hecha para soportar MongoDB, por lo que se debe ajustar el archivo
.env con sus valores correspondientes.

```
MONGODB_URL = "PONER URL DE TU DB"
JWT_SECRET_KEY = "PONER SECRETO PARA CREAR TOKEN"
BASE_API_ENDPOINT = "https://swapi.dev/api" --> API de StarWars
```


## Ejecutar aplicación

```bash

# development

$  pnpm  run  start



# watch mode

$  pnpm  run  start:dev



# production mode

$  pnpm  run  start:prod

```

## Test

```bash

# unit tests

$  pnpm  run  test



# e2e tests

$  pnpm  run  test:e2e



# test coverage

$  pnpm  run  test:cov

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)

- Website - [https://nestjs.com](https://nestjs.com/)

- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
