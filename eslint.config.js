import eslint from "@eslint/js";
import n from "eslint-plugin-n";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        ignores: ["lib", "node_modules", "pnpm-lock.yaml", "**/*.snap"],
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: "error",
        },
    },
    eslint.configs.recommended,
    n.configs["flat/recommended"],
    {
        files: ["**/*.ts", "**/*.js"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: path.resolve(__dirname, "./tsconfig.eslint.json"),
                ecmaVersion: 2020,
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            // These on-by-default rules don't work well for this repo and we like them off.
            "no-constant-condition": "off",

            // These on-by-default rules work well for this repo if configured
            "@typescript-eslint/no-unused-vars": [
                "error",
                { caughtErrors: "all" },
            ],
        },
    },
    {
        files: ["*.jsonc"],
        rules: {
            "jsonc/comma-dangle": "off",
            "jsonc/no-comments": "off",
            "jsonc/sort-keys": "error",
        },
    },
    {
        files: ["**/*.md/*.ts"],
        extends: [tseslint.configs.disableTypeChecked],
        rules: {
            "n/no-missing-import": [
                "error",
                { allowModules: ["design-patterns-workshop"] },
            ],
        },
    },
];
