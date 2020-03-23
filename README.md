# acnh-listpage

## Quick method

If just wanna see/use this, go to this projects [GitPages](https://naaw9051.github.io/acnh-listpage).
But you still need to [start the backend](https://github.com/naaw9051/acnh-backend).

## Prerequisites

You need to install [NodeJS](https://nodejs.org/en/) to run this project.
This project needs its backend to properly run.
For local developement or usage you need to have it running.
[Backend & Instructions](https://github.com/naaw9051/acnh-backend).

## Project setup

### Installation

```cmd
npm install
```

### Local Dev-Server

Compiles and hot-reloads for development

```cmd
npm run serve
```

### Building

Compiles and minifies for production

```cmd
npm run build
```

### Lints and fixes files

```cmd
npm run lint
```

### Change backend host address

In `./src/main.ts` change `Vue.prototype.$backendhostname` to your backend address.
(Currently `http://localhost:3000`).


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
