// Button interface and concrete implementations
interface Button {
	paint(): void;
}

class WindowsButton implements Button {
	paint(): void {
		console.log("Rendering a button in Windows style.");
	}
}

class MacOSButton implements Button {
	paint(): void {
		console.log("Rendering a button in macOS style.");
	}
}

// Checkbox interface and concrete implementations
interface Checkbox {
	paint(): void;
}

class WindowsCheckbox implements Checkbox {
	paint(): void {
		console.log("Rendering a checkbox in Windows style.");
	}
}

class MacOSCheckbox implements Checkbox {
	paint(): void {
		console.log("Rendering a checkbox in macOS style.");
	}
}

// Test the code
const winButton = new WindowsButton();
winButton.paint();

const macButton = new MacOSButton();
macButton.paint();

const winCheckbox = new WindowsCheckbox();
winCheckbox.paint();

const macCheckbox = new MacOSCheckbox();
macCheckbox.paint();
