// Product interface
interface Button {
    render(): void;
}

// Concrete Products
class WindowsButton implements Button {
    render(): void {
        console.log("Rendering a Windows button.");
    }
}

class MacOSButton implements Button {
    render(): void {
        console.log("Rendering a macOS button.");
    }
}

// Creator abstract class
abstract class Dialog {
    abstract createButton(): Button;

    renderDialog(): void {
        const button = this.createButton();
        button.render();
    }
}

// Concrete Creators
class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}

class MacOSDialog extends Dialog {
    createButton(): Button {
        return new MacOSButton();
    }
}

// Client code
function main() {
    let dialog: Dialog;

    const os = "Windows"; // This can be dynamically determined in a real application

    if (os === "Windows") {
        dialog = new WindowsDialog();
    } else {
        dialog = new MacOSDialog();
    }

    dialog.renderDialog();
}

main();
