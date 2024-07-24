<h1 align="center">Design Patterns Workshop</h1>

<p align="center">A collection of patterns to go over Design Patterns for TypeScript.</p>

Welcome to the Design Projects Workshop repository! This repository contains examples of different design patterns implemented in TypeScript. The goal of this repository is to provide hands-on examples and exercises to help you understand and apply various design patterns in your projects.

## Table of Contents

-   [Introduction](#introduction)
-   [Design Patterns](#design-patterns)
    -   [Creational Patterns](#creational-patterns)
    -   [Structural Patterns](#structural-patterns)
    -   [Behavioral Patterns](#behavioral-patterns)
-   [Getting Started](#getting-started)
-   [Contributing](#contributing)
-   [Code of Conduct](#code-of-conduct)
-   [License](#license)

## Introduction

Design patterns are reusable solutions to common problems in software design. They represent best practices and provide templates that developers can use to solve common design problems. This repository contains examples of various design patterns implemented in TypeScript, along with exercises to help you practice and understand each pattern.

## Design Patterns

### Creational Patterns

Creational Patterns focus on the mechanisms of object creation. These patterns aim to abstract the instantiation process, making the system independent of how its objects are created, composed, and represented. They promote flexibility and reuse by providing various ways to create objects.

> **ELI5 Explanation:** Imagine you’re at a pizza restaurant, and you want to order a pizza. Instead of making the pizza yourself (which could get messy and complicated), you tell the chef what kind of pizza you want, and they handle the rest. Creational patterns are like that chef —they help you create different objects (like pizzas) without you having to know the details of how they’re made.

#### Common Creational Patterns:

1. **Singleton Pattern**

    - Ensures a class has only one instance and provides a global point of access to it.
    - [Example Code](src/examples/creational/singleton/_SINGLETON.md)

2. **Factory Method Pattern**

    - Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
    - [Example Code](src/examples/creational/factory-method/_FACTORY_METHOD.md)

3. **Abstract Factory Pattern**

    - Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
    - [Example Code](src/examples/creational/abstract-factory/_ABSTRACT_FACTORY.md)

4. **Builder Pattern**

    - Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
    - [Example Code](src/examples/creational/builder) (WIP)

5. **Prototype Pattern**
    - Creates new objects by copying an existing object, known as the prototype.
    - [Example Code](src/examples/creational/prototype) (WIP)

### Structural Patterns

Structural Patterns deal with the composition of classes or objects. These patterns help ensure that if one part of a system changes, the entire system does not need to change. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionalities.

> **ELI5 Explanation:** Think of a Lego set. Structural patterns are like the different ways you can combine Lego pieces to build something new, like a house or a car. Even though the pieces are the same, the way you put them together can create entirely different structures. These patterns help you piece together your code in flexible ways, so you can build more complex things without starting from scratch.

#### Common Structural Patterns:

1. **Adapter Pattern**

    - Allows incompatible interfaces to work together.
    - [Example Code](src/examples/structural/adapter) (WIP)

2. **Decorator Pattern**

    - Adds behavior to objects dynamically.
    - [Example Code](src/examples/structural/decorator) (WIP)

3. **Facade Pattern**

    - Provides a simplified interface to a complex subsystem.
    - [Example Code](src/examples/structural/facade) (WIP)

4. **Proxy Pattern**

    - Provides a surrogate or placeholder for another object to control access to it.
    - [Example Code](src/examples/structural/proxy) (WIP)

5. **Composite Pattern**
    - Composes objects into tree structures to represent part-whole hierarchies.
    - [Example Code](src/examples/structural/composite) (WIP)

### Behavioral Patterns

Behavioral Patterns focus on communication between objects. These patterns are concerned with algorithms and the assignment of responsibilities between objects. They describe not just patterns of objects or classes but also the patterns of communication between them.

> **ELI5 Explanation:** Imagine you’re part of a team playing a game of soccer. Behavioral patterns are like the different strategies and rules your team follows to communicate and pass the ball. Everyone knows their role and how to interact with each other to achieve the goal. Similarly, these patterns help different parts of your code communicate and work together effectively to complete tasks.

#### Common Behavioral Patterns:

1. **Observer Pattern**

    - Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
    - [Example Code](src/examples/behavioral/observer) (WIP)

2. **Strategy Pattern**

    - Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
    - [Example Code](src/examples/behavioral/strategy) (WIP)

3. **Command Pattern**

    - Encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
    - [Example Code](src/examples/behavioral/command) (WIP)

4. **Chain of Responsibility Pattern**
    - Passes a request along a chain of handlers, each of which can handle the request or pass it to the next handler in the chain.
    - [Example Code](src/examples/behavioral/chain-of-responsibility) (WIP)

## Getting Started

To get started with this repository, clone it to your local machine and navigate to the example you want to explore. Each example contains its own README file with instructions on how to run and understand the code.

```bash
git clone https://github.com/escudero89/design-patterns-workshop.git
pnpm
pnpm build
node lib/... # Whatever you want to try!
```

## Contributing

We welcome contributions from the community! Please read our [CONTRIBUTING.md](.github/CONTRIBUTING.md) file for more information on how to get started.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](.github/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

This repository is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for more information.

---

Thank you for visiting the Design Projects Workshop repository! We hope you find these examples and exercises helpful in learning and applying design patterns in your projects. Happy coding!
