# Factory Method Pattern

Welcome to the Factory Method Pattern example! This folder contains a TypeScript implementation of the Factory Method design pattern. The Factory Method pattern provides an interface for creating an object but allows subclasses to alter the type of objects that will be created.

## Table of Contents

-   [Introduction](#introduction)
-   [Real-World Analogy](#real-world-analogy)
-   [Applicability](#applicability)
-   [Implementation](#implementation)
-   [Pros and Cons](#pros-and-cons)
-   [Usage](#usage)
-   [Getting Started](#getting-started)
-   [Related Design Patterns](#related-design-patterns)

## Introduction

The Factory Method pattern is a **creational design pattern** that defines an interface for creating an object but lets subclasses alter the type of objects that will be created. It promotes loose coupling by eliminating the need to bind application-specific classes into the code.

## Real-World Analogy

Imagine a bakery that makes various types of cakes. Instead of having a generic "cake" class, you have a method called `createCake` that can be overridden to create specific types of cakes, like "Chocolate Cake" or "Vanilla Cake". Each type of cake is created by a different bakery, ensuring that the right ingredients and methods are used.

## Applicability

Use the Factory Method pattern when:

-   A class cannot anticipate the type of objects it needs to create beforehand.
-   A class wants its subclasses to specify the objects it creates.
-   You want to localize the knowledge of which class to instantiate.

## Implementation

The implementation of the Factory Method pattern is provided in the [`pattern.ts`](./pattern.ts) file.

## Pros and Cons

| Pros                                                                                           | Cons                                                  |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Promotes Loose Coupling: Decouples the client code from the concrete classes                   | Can introduce complexity in the codebase              |
| Single Responsibility Principle: The factory method is responsible for creating objects        | Requires additional classes and interfaces            |
| Enhances Flexibility: Easy to introduce new types of products without changing the client code | May lead to code that is more difficult to understand |

## Usage

To use the Factory Method pattern in your TypeScript project, follow these steps:

1. **Define the Product Interface:**

    - Create an interface for the objects that the factory method creates.

2. **Implement Concrete Products:**

    - Create classes that implement the product interface.

3. **Define the Creator Class:**

    - Create an abstract class that declares the factory method.

4. **Implement Concrete Creators:**
    - Create subclasses of the creator class that override the factory method to create specific products.

## Getting Started

To run the examples in this folder, use the following commands after building the project as described in the main [README](../../../../README.md):

```bash
node lib/src/examples/creational/factory-method/pattern.js
node lib/src/examples/creational/factory-method/task.js
node lib/src/examples/creational/factory-method/result.js
```

## Related Design Patterns

-   **Abstract Factory:** Factory Method is often used to implement the creation methods defined in Abstract Factory.
-   **Singleton:** A factory method can be used to create a Singleton instance.
-   **Prototype:** Factory Method might use the Prototype pattern to copy existing instances of products.

---

Thank you for exploring the Factory Method Pattern example! We hope this implementation helps you understand and apply the Factory Method design pattern in your projects. Happy coding!
