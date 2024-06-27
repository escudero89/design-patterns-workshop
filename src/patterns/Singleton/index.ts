export class Singleton {
	private static instance: Singleton;

	private constructor() {
		// Private constructor ensures no external instantiation
	}

	static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	public someMethod(): void {
		console.log("Singleton method called!");
	}
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
instance1.someMethod();
