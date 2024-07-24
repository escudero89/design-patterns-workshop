// Task: We need to create a bakery that can produce different types of cakes (e.g., Chocolate and Vanilla cakes).
// Currently, the code directly instantiates the cake classes, leading to code duplication and tight coupling.

class ChocolateCake {
    bake(): void {
        console.log("Baking a Chocolate Cake.");
    }
}

class VanillaCake {
    bake(): void {
        console.log("Baking a Vanilla Cake.");
    }
}

class Bakery {
    bakeCake(flavor: string) {
        if (flavor === "Chocolate") {
            const cake = new ChocolateCake();
            cake.bake();
        } else if (flavor === "Vanilla") {
            const cake = new VanillaCake();
            cake.bake();
        } else {
            console.log("Unsupported cake flavor.");
        }
    }
}

// Client code
const bakery = new Bakery();
bakery.bakeCake("Chocolate");
bakery.bakeCake("Vanilla");

// The code above is tightly coupled with the specific cake classes.
// Let's refactor this to use the Factory Method pattern.
