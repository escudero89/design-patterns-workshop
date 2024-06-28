<h1 align="center">Design Patterns Workshop</h1>

<p align="center">A collection of patterns to go over Design Patterns for TypeScript.</p>

Welcome to the Design Projects Workshop repository! This repository contains examples of different design patterns implemented in TypeScript. The goal of this repository is to provide hands-on examples and exercises to help you understand and apply various design patterns in your projects.

## Table of Contents

- [Introduction](#introduction)
- [Design Patterns](#design-patterns)
  - [Creational Patterns](#creational-patterns)
  - [Structural Patterns](#structural-patterns)
  - [Behavioral Patterns](#behavioral-patterns)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Introduction

Design patterns are reusable solutions to common problems in software design. They represent best practices and provide templates that developers can use to solve common design problems. This repository contains examples of various design patterns implemented in TypeScript, along with exercises to help you practice and understand each pattern.

## Design Patterns

### Creational Patterns

1. **Singleton Pattern**

   - Ensures a class has only one instance and provides a global point of access to it.
   - [Example Code](examples/creational/singleton)

2. **Factory Method Pattern**

   - Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
   - [Example Code](examples/creational/factory-method)

3. **Abstract Factory Pattern**

   - Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
   - [Example Code](examples/creational/abstract-factory)

4. **Builder Pattern**

   - Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
   - [Example Code](examples/creational/builder)

5. **Prototype Pattern**
   - Creates new objects by copying an existing object, known as the prototype.
   - [Example Code](examples/creational/prototype)

### Structural Patterns

1. **Adapter Pattern**

   - Allows incompatible interfaces to work together.
   - [Example Code](examples/structural/adapter)

2. **Decorator Pattern**

   - Adds behavior to objects dynamically.
   - [Example Code](examples/structural/decorator)

3. **Facade Pattern**

   - Provides a simplified interface to a complex subsystem.
   - [Example Code](examples/structural/facade)

4. **Proxy Pattern**

   - Provides a surrogate or placeholder for another object to control access to it.
   - [Example Code](examples/structural/proxy)

5. **Composite Pattern**
   - Composes objects into tree structures to represent part-whole hierarchies.
   - [Example Code](examples/structural/composite)

### Behavioral Patterns

1. **Observer Pattern**

   - Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
   - [Example Code](examples/behavioral/observer)

2. **Strategy Pattern**

   - Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
   - [Example Code](examples/behavioral/strategy)

3. **Command Pattern**

   - Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
   - [Example Code](examples/behavioral/command)

4. **Chain of Responsibility Pattern**
   - Passes a request along a chain of handlers, each of which can handle the request or pass it to the next handler in the chain.
   - [Example Code](examples/behavioral/chain-of-responsibility)

## Getting Started

To get started with this repository, clone it to your local machine and navigate to the example you want to explore. Each example contains its own README file with instructions on how to run and understand the code.

```bash
git clone https://github.com/your-username/design-projects-workshop.git
yarn
yarn build
node build/... # Whatever you want to try!
```

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](.github/CONTRIBUTING.md) file for more information on how to get started.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](.github/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

This repository is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for more information.

---

Thank you for visiting the Design Projects Workshop repository! We hope you find these examples and exercises helpful in learning and applying design patterns in your projects. Happy coding!
