// Abstract Factory interfaces
interface GUIFactory {
	createButton(): Button;
	createCheckbox(): Checkbox;
}

// Concrete Factories
class WindowsFactory implements GUIFactory {
	createButton(): Button {
		return new WindowsButton();
	}

	createCheckbox(): Checkbox {
		return new WindowsCheckbox();
	}
}

class MacOSFactory implements GUIFactory {
	createButton(): Button {
		return new MacOSButton();
	}

	createCheckbox(): Checkbox {
		return new MacOSCheckbox();
	}
}

// Abstract Products
interface Button {
	paint(): void;
}

interface Checkbox {
	paint(): void;
}

// Concrete Products for Windows
class WindowsButton implements Button {
	paint(): void {
		console.log("Rendering a button in Windows style.");
	}
}

class WindowsCheckbox implements Checkbox {
	paint(): void {
		console.log("Rendering a checkbox in Windows style.");
	}
}

// Concrete Products for macOS
class MacOSButton implements Button {
	paint(): void {
		console.log("Rendering a button in macOS style.");
	}
}

class MacOSCheckbox implements Checkbox {
	paint(): void {
		console.log("Rendering a checkbox in macOS style.");
	}
}

// Client code using the Abstract Factory
class Application {
	private button: Button;
	private checkbox: Checkbox;

	constructor(factory: GUIFactory) {
		this.button = factory.createButton();
		this.checkbox = factory.createCheckbox();
	}

	render(): void {
		this.button.paint();
		this.checkbox.paint();
	}
}

// Test the Abstract Factory pattern
function configureApplication(os: string): Application {
	let factory: GUIFactory;

	if (os === "Windows") {
		factory = new WindowsFactory();
	} else if (os === "MacOS") {
		factory = new MacOSFactory();
	} else {
		throw new Error("Unsupported OS type");
	}

	return new Application(factory);
}

const app = configureApplication("Windows");
app.render();

const appMac = configureApplication("MacOS");
appMac.render();
