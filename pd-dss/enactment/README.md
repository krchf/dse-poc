# PD-DSS Enactment

This directory includes the prototypical implementation for the _PD-DSS Enactment_ application.

## Software Prerequisites

- Docker Compose (which is included with [Docker Desktop](https://www.docker.com/products/docker-desktop/))
- [Camunda Modeler](https://camunda.com/download/modeler/)
- [Node.js & npm](https://nodejs.org/en) (tested with `node v18.16.0`)

## How to Use

1. In the `camunda` directory, remove the `.example` suffix from `.env.example` and `connector-secrets.txt.example`, and run `docker compose up -d` to start a self-managed version of the [_Camunda_ Platform](https://camunda.com/get-started/?tab=self-managed).
2. In the `conversion` directory, run `npm install` to install dependencies and `npm start` to convert the example selected in line two of `conversion/index.ts`. (Alternatively, use the examples provided in `camunda/examples`.)
3. Save the output as an `.bpmn` or `.xml` file, import it in the _Camunda Modeler_ application, and deploy the diagram via the rocket icon at the bottom of the application ("Deploy current diagram") to cluster endpoint `http://0.0.0.0:26500`
4. Start a process model instance by clicking the "Play"-Icon ("Start current diagram") at the bottom of the _Camunda Modeler_. You can use the variables provided in `camunda/examples/variables.json` or in `conversion/variables-example.md`.
5. Visit _Camunda Operate_ at http://localhost:8081/ to see progress of process model enactment. Visit _Camunda Tasklist_ at http://localhost:8082/ to see a list of open user tasks. (Default login is `demo:demo`).
6. In the `camunda` directory, run `docker compose down` to stop the platform.
