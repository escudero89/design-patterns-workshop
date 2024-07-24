// Product interface
interface Alert {
    show(): void;
}

// Concrete Products
class WindowsAlert implements Alert {
    show(): void {
        console.log("Showing Windows alert.");
    }
}

class MacOSAlert implements Alert {
    show(): void {
        console.log("Showing macOS alert.");
    }
}

// Creator abstract class
abstract class AlertFactory {
    abstract createAlert(): Alert;

    showAlert(): void {
        const alert = this.createAlert();
        alert.show();
    }
}

// Concrete Creators
class WindowsAlertFactory extends AlertFactory {
    createAlert(): Alert {
        return new WindowsAlert();
    }
}

class MacOSAlertFactory extends AlertFactory {
    createAlert(): Alert {
        return new MacOSAlert();
    }
}

// Client code
function displayAlert(os: string) {
    let alertFactory: AlertFactory;

    if (os === "Windows") {
        alertFactory = new WindowsAlertFactory();
    } else if (os === "MacOS") {
        alertFactory = new MacOSAlertFactory();
    } else {
        console.log("Unsupported OS.");
        return;
    }

    alertFactory.showAlert();
}

displayAlert("Windows");
displayAlert("MacOS");

// The code now uses the Factory Method pattern, making it more flexible and easier to maintain.
