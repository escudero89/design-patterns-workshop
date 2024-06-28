# Singleton Pattern

Welcome to the Singleton Pattern example! This folder contains a TypeScript implementation of the Singleton design pattern. The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.

## Table of Contents

- [Introduction](#introduction)
- [Real-World Analogy](#real-world-analogy)
- [Applicability](#applicability)
- [Implementation](#implementation)
- [Pros and Cons](#pros-and-cons)
- [Usage](#usage)
- [Getting Started](#getting-started)

## Introduction

The Singleton pattern is a **creational design pattern** that restricts the instantiation of a class to a single instance. This is useful when exactly one object is needed to coordinate actions across the system. Common use cases for the Singleton pattern include managing configuration settings, logging, and accessing shared resources like databases.

## Real-World Analogy

Imagine a government issuing unique national identification numbers (ID numbers) to its citizens. Regardless of how many times you apply for an ID, you only ever get one unique number. Similarly, a Singleton ensures that there is only one instance of a class and provides a single point of access to it.

## Applicability

Use the Singleton pattern when:

- There must be exactly one instance of a class, and it must be accessible from a well-known access point.
- The sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.
- You want to control access to a shared resource, such as a configuration object or a logging system.

## Implementation

The implementation of the Singleton pattern is provided in the [`pattern.ts`](./pattern.ts) file.

## Pros and Cons

| Pros                                                     | Cons                                           |
| -------------------------------------------------------- | ---------------------------------------------- |
| Controlled Access: Single point of access to an instance | Difficult to unit test                         |
| Reduced Namespace Pollution: Fewer global variables      | Potential for misuse                           |
| Lazy Initialization: Only created when needed            | Can hinder parallel development                |
| Simplifies debugging and maintenance                     | Can introduce global state into an application |

## Usage

To use the Singleton pattern in your TypeScript project, follow these steps:

1. **Define the Singleton Class:**

   - Create a class with a private static instance variable.
   - Implement a private constructor to prevent direct instantiation.
   - Add a static method to provide access to the instance.

2. **Access the Singleton Instance:**
   - Use the static method to get the instance of the class.
   - Ensure that all parts of your application use this method to access the instance.

## Getting Started

To run the examples in this folder, use the following commands after building the project as described in the main [README](../../../../README.md):

```bash
node lib/src/examples/creational/singleton/pattern.js
node lib/src/examples/creational/singleton/task.js
node lib/src/examples/creational/singleton/result.js
```

---

Thank you for exploring the Singleton Pattern example! We hope this implementation helps you understand and apply the Singleton design pattern in your projects. Happy coding!
