class ConfigurationManager {
    private static instance: ConfigurationManager;
    private settings: { [key: string]: string } = {};

    private constructor() {
        // Private constructor ensures no external instantiation
    }

    static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    getSetting(key: string): string {
        return this.settings[key];
    }

    setSetting(key: string, value: string): void {
        this.settings[key] = value;
    }
}

// Test the Singleton ConfigurationManager
const config1 = ConfigurationManager.getInstance();
const config2 = ConfigurationManager.getInstance();

config1.setSetting("apiUrl", "https://api.example.com");
console.log(config2.getSetting("apiUrl")); // https://api.example.com

console.log(config1 === config2); // true

config2.setSetting("apiKey", "123456");
console.log(config1.getSetting("apiKey")); // 123456
