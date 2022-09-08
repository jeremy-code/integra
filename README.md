# Integra

![GitHub Actions status](https://github.com/jeremynguyencs/integra/actions/workflows/ci.yml/badge.svg)

Integra is a web application for learning about your local politicians. It is built with a [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) front-end, an [Express](https://expressjs.com/) Node.js [GraphQL](https://graphql.org/) backend API, and a [MongoDB](https://mongodb.com/) database with a [Prisma](https://www.prisma.io/) schema. The project is currently in development.

The web application is located at [integra.vote](https://integra.vote/), hosted with [Cloudflare Pages](https://pages.cloudflare.com/). The GraphQL Express API server is hosted on [api.integra.vote](https://api.integra.vote/graphql) with [fly.io](https://fly.io/).

## Installation

```bash
git clone https://github.com/jeremynguyencs/integra
cd integra
yarn
```

## Usage

```bash
# Run the development server locally
yarn dev

# Lint and format code
yarn lint
yarn format

# Build
yarn build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
