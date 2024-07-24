// Product interface
interface Cake {
    bake(): void;
}

// Concrete Products
class ChocolateCake implements Cake {
    bake(): void {
        console.log("Baking a Chocolate Cake.");
    }
}

class VanillaCake implements Cake {
    bake(): void {
        console.log("Baking a Vanilla Cake.");
    }
}

// Creator abstract class
abstract class CakeFactory {
    abstract createCake(): Cake;

    bakeCake(): void {
        const cake = this.createCake();
        cake.bake();
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

// Client code
class Bakery {
    bakeCake(flavor: string) {
        let cakeFactory: CakeFactory;

        if (flavor === "Chocolate") {
            cakeFactory = new ChocolateCakeFactory();
        } else if (flavor === "Vanilla") {
            cakeFactory = new VanillaCakeFactory();
        } else {
            console.log("Unsupported cake flavor.");
            return;
        }

        cakeFactory.bakeCake();
    }
}

const bakery = new Bakery();
bakery.bakeCake("Chocolate");
bakery.bakeCake("Vanilla");

// The code now uses the Factory Method pattern, making it more flexible and easier to maintain.
