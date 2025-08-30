import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { 
    ignores: [
      "dist/**",
      "build/**", 
      "node_modules/**",
      "coverage/**",
      "*.config.js",
      "vite.config.ts"
    ] 
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        // PWA specific globals
        navigator: "readonly",
        indexedDB: "readonly",
        SpeechRecognition: "readonly",
        webkitSpeechRecognition: "readonly",
        // Service Worker globals
        self: "readonly",
        caches: "readonly",
        importScripts: "readonly",
        // Capacitor globals
        Capacitor: "readonly",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // General JavaScript/TypeScript rules
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-template": "error",
      "eqeqeq": ["error", "always"],
      
      // PWA specific rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      
      // Performance and best practices
      "no-unused-expressions": "error",
      "no-unreachable": "error",
      "consistent-return": "warn"
    },
  },
  {
    files: ["**/*.test.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser
      }
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    files: ["src/sw.ts", "**/service-worker.ts"],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    },
    rules: {
      "no-console": "off"
    }
  }
);
