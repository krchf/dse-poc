# DSE-PoC: Proof-of-Concept Implementations for Decision Support Ecosystems

This repository bundles prototypical proof-of-concept implementations for design proposals described in the PhD thesis _"Decision Support Ecosystems: Assisted Low-Code Development of Tailored Decision Support Systems"_.

This README provides an overview of the implementations associated with the PhD thesis.
It links to the individual READMEs of each implementation, which contain further information such as software prerequisites or instructions on how to use the implementation.

## `description` - _Description of Decision Support_ (Chapter 5)

The [`description`](description/README.md) folder contains the CMS-based implementation of the applications that enable ...

- domain experts to capture decision making characteristics of an application domain,
- service providers to capture decision support services, and
- decision makers to document their requirements for decision support.

## `pd-dss` - _Process-Driven Decision Support Systems_ (Chapter 6)

The [`pd-dss`](pd-dss/README.md) folder contains the prototypical implementation of the _PD-DSS Design_ application to describe a PD-DSS as a composition of decision support services using a BPMN process model.
It also contains a proof-of-concept script demonstrating how to convert a PD-DSS process model for usage with the _Camunda_ BPMN process engine for the implementation of the _PD-DSS Enactment_ application.

## _Composition Assistance_ (Chapter 7)

The prototypical implementations for technically challenging aspects of the composition assistance were already published with the initial paper publications.
Instead of copying them into this repository, they are instead linked here.

### Informational Composition Assistance

The prototypical implementation of the metadata validation provided by the informational composition assistance using _JSON Schema_ is available at: [https://github.com/krchf/schema-based-dataflow-validation](https://github.com/krchf/schema-based-dataflow-validation)

### Functional-Behavioral Composition Assistance

The prototypical implementation of the anti-pattern detection provided by the functional-behavioral composition assistance using the graph database _Neo4j_ is available at: [https://github.com/krchf/process-graph-antipattern-detection](https://github.com/krchf/process-graph-antipattern-detection)
