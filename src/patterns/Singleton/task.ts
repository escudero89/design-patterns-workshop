class ConfigurationManager {
	private settings: { [key: string]: string } = {};

	constructor() {
		// Initialization code
	}

	getSetting(key: string): string {
		return this.settings[key];
	}

	setSetting(key: string, value: string): void {
		this.settings[key] = value;
	}
}

// Test the Singleton ConfigurationManager
const config1 = new ConfigurationManager();
const config2 = new ConfigurationManager();

config1.setSetting("apiUrl", "https://api.example.com");
console.log(config2.getSetting("apiUrl")); // should be https://api.example.com

console.log(config1 === config2); // should be true

config2.setSetting("apiKey", "123456");
console.log(config1.getSetting("apiKey")); // should be 123456
