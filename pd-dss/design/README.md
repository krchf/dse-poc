# PD-DSS Design

The prototypical implementation of the _PD-DSS Design_ application in this subdirectory uses the [_bpmn.js_](https://bpmn.io/toolkit/bpmn-js/) library for the visual modeling of a BPMN process model representing a composition of decision support services.

> **Note:** The goal of the prototypical implementation is only to demonstrate the fundamental technical feasibility of visual PD-DSS modeling. It is not integrated with the _Service Registry_ or the _Composition Assistance_.

## Software Prerequisites

- [Node.js & npm](https://nodejs.org/en) (tested with `node v18.16.0`)
- Optional: Running _PD-DSS Repository_ application for data persistence

## How to Use

- _(Only on first use)_ Run `npm install` to install dependencies.
- Run `npm run dev` to start the local development server.
- Visit http://localhost:5500/, add model elements and check out the `Decision Support Ecosystem` configuration group in the right property editor.

> Note that saving does not work without the _PD-DSS Repository_ application!
