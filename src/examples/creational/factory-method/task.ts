// Task: We need to create a UI that can render different types of alerts (e.g., Windows and MacOS alerts).
// Currently, the code directly instantiates the alert classes, leading to code duplication and tight coupling.

class WindowsAlert {
    show(): void {
        console.log("Showing Windows alert.");
    }
}

class MacOSAlert {
    show(): void {
        console.log("Showing macOS alert.");
    }
}

// Client code
function showAlert(os: string) {
    if (os === "Windows") {
        const alert = new WindowsAlert();
        alert.show();
    } else if (os === "MacOS") {
        const alert = new MacOSAlert();
        alert.show();
    } else {
        console.log("Unsupported OS.");
    }
}

showAlert("Windows");
showAlert("MacOS");

// The code above is tightly coupled with the specific alert classes.
// Let's refactor this to use the Factory Method pattern.
