// Product interface
interface Cake {
    prepareIngredients(): void;
    bake(): void;
    decorate(): void;
}

// Concrete Products
class ChocolateCake implements Cake {
    prepareIngredients(): void {
        console.log("Preparing ingredients for Chocolate Cake.");
    }

    bake(): void {
        console.log("Baking a Chocolate Cake.");
    }

    decorate(): void {
        console.log("Decorating a Chocolate Cake.");
    }
}

class VanillaCake implements Cake {
    prepareIngredients(): void {
        console.log("Preparing ingredients for Vanilla Cake.");
    }

    bake(): void {
        console.log("Baking a Vanilla Cake.");
    }

    decorate(): void {
        console.log("Decorating a Vanilla Cake.");
    }
}

// Creator abstract class
abstract class CakeFactory {
    abstract createCake(): Cake;

    bakeCake(): void {
        const cake = this.createCake();
        cake.prepareIngredients();
        cake.bake();
        cake.decorate();
    }
}

// Concrete Creators
class ChocolateCakeFactory extends CakeFactory {
    createCake(): Cake {
        return new ChocolateCake();
    }
}

class VanillaCakeFactory extends CakeFactory {
    createCake(): Cake {
        return new VanillaCake();
    }
}

// Factory Registry
class CakeFactoryRegistry {
    private factories: { [key: string]: CakeFactory } = {};

    registerFactory(flavor: string, factory: CakeFactory): void {
        this.factories[flavor] = factory;
    }

    getFactory(flavor: string): CakeFactory | null {
        return this.factories[flavor] || null;
    }
}

// Client code
class Bakery {
    private factoryRegistry: CakeFactoryRegistry;

    constructor(factoryRegistry: CakeFactoryRegistry) {
        this.factoryRegistry = factoryRegistry;
    }

    bakeCake(flavor: string) {
        const cakeFactory = this.factoryRegistry.getFactory(flavor);
        if (cakeFactory) {
            cakeFactory.bakeCake();
        } else {
            console.log("Unsupported cake flavor.");
        }
    }
}

// Setup
const factoryRegistry = new CakeFactoryRegistry();
factoryRegistry.registerFactory("Chocolate", new ChocolateCakeFactory());
factoryRegistry.registerFactory("Vanilla", new VanillaCakeFactory());

const bakery = new Bakery(factoryRegistry);
bakery.bakeCake("Chocolate");
bakery.bakeCake("Vanilla");

// The code now uses a Factory Registry to eliminate the if/else block entirely.
// The Bakery class is even more decoupled from the specific implementations and is easier to extend.
