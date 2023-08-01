# Description of Provided and Required Decision Support in an Application Domain

The prototypical implementation contained in this directory demonstrates how to use the headless content management system [_Payload_](https://payloadcms.com/) to enable ...

- ... domain experts to describe decision-making characteristics of an application domain,
- ... service providers to describe characteristics of their decision support services, and
- ... decision makers to document their requirements for decision support.

The goal of this prototypical implementation is only to demonstrate the suitability of a headless CMS to speed up the implementation of the _Domain Registry_, _Service Registry_ and _Requirements Elicitation_ applications of the DSE reference architecture. The prototypical implementation does not yet provide the full expressiveness of the meta-model described in the thesis!

## Software Prerequisites

- Docker Compose (which is included with [Docker Desktop](https://www.docker.com/products/docker-desktop/))
- [Node.js & npm](https://nodejs.org/en) (for local development, tested with `node v18.16.0`)

## How to Use

- Run `docker compose up -d` to start application services.
- Wait for http://localhost:3000/admin to become available. (Progress can be checked via `docker compose logs -f payload`.)
- _(Only on first execution)_ Create a new user.
- Use the admin user interface. (See example below).
- Run `docker compose down` to stop application services. (Append the `-v` flag to remove data.)

**Example Usage:**

1. Define a "Network Topology" data type at http://localhost:3000/admin/collections/types
2. Define a "Size" metadata attribute at http://localhost:3000/admin/collections/attributes for the created data type

> **Note**: Since _Payload_ only supports unidirectional associations, the referencing instance is stored in the referenced instance for aggregations to enable better filtering functionality. Semantically, it makes sense to remove all instances referenced by an aggregation if the referencing instance is deleted, which can be implemented using _Payload_'s hook system.

## Local Development

This project was created using `create-payload-app` using the blank template.

- Run `docker compose up -d mongo` to start the database.
- Run `npm run dev` to start a local development server.
- Edit the _Payload_ config in `./src/payload.config.ts`.

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag`
