# PD-DSS Repository

The prototypical implementation of the _PD-DSS Repository_ application was not further advanced as it corresponds to a simple CRUD application. Nevertheless, initial development efforts are included in this directory for completeness.

## Software Prerequisites

- Docker Compose (which is included with [Docker Desktop](https://www.docker.com/products/docker-desktop/))
- [Node.js & npm](https://nodejs.org/en) (for local development, tested with `node v18.16.0`)
- Optional: Running [_PD-DSS Design_](../design/README.md) application

## How to Use

1. In the `supabase` directory, rename `.env.example` to `.env` and run `docker compose up -d`
2. In the `management` directory, run `npm install` to install dependencies and `npm run dev` to start a local development server.
3. Visit http://localhost:5000/compositions/test to create a new composition
4. In the `supabase` directory, run `docker compose down`
