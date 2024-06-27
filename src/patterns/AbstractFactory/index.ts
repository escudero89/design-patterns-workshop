interface Product {
	operation(): string;
}

class ConcreteProductA implements Product {
	operation(): string {
		return "Result of ConcreteProductA";
	}
}

class ConcreteProductB implements Product {
	operation(): string {
		return "Result of ConcreteProductB";
	}
}

abstract class Creator {
	abstract factoryMethod(): Product;

	someOperation(): string {
		const product = this.factoryMethod();
		return `Creator: The same creator's code has just worked with ${product.operation()}`;
	}
}

class ConcreteCreatorA extends Creator {
	factoryMethod(): Product {
		return new ConcreteProductA();
	}
}

class ConcreteCreatorB extends Creator {
	factoryMethod(): Product {
		return new ConcreteProductB();
	}
}

const creatorA = new ConcreteCreatorA();
console.log(creatorA.someOperation());

const creatorB = new ConcreteCreatorB();
console.log(creatorB.someOperation());
