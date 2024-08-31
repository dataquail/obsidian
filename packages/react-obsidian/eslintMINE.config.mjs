import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importNewlines from "eslint-plugin-import-newlines";
import unusedImports from "eslint-plugin-unused-imports";
import jestFormatting from "eslint-plugin-jest-formatting";
import obsidian from "eslint-plugin-obsidian";



export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
)

[
  {
    files: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "transformers/**/*.ts",
      "text/**/*.ts",
      "text/**/*.tsx"
    ],
    ignores: ["**/*.config.js", "dist/*,", "**/wallaby.js"],
    ...fixupConfigRules(compat.extends(
      "airbnb-base",
      "airbnb-typescript",
      "plugin:react/recommended",
      "plugin:import/typescript",
      "plugin:@stylistic/disable-legacy",
      "plugin:jest-formatting/recommended",
    )),
    languageOptions: {
      globals: {
        ...globals.jest,
      },
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "module",
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    plugins: {
      "@stylistic": fixupPluginRules(stylistic),
      react: fixupPluginRules(react),
      "@typescript-eslint": typescriptEslint,
      "import-newlines": importNewlines,
      "unused-imports": unusedImports,
      "jest-formatting": fixupPluginRules(jestFormatting),
      obsidian,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": "off",
      "obsidian/unresolved-provider-dependencies": "error",
      "obsidian/no-circular-dependencies": "warn",

      "obsidian/strongly-typed-inject-component": ["error", {
        injectedPropsPattern: "/\\b(Injected|InjectedProps)\\b/",
      }],

      "@stylistic/max-len": ["error", {
        code: 115,
        comments: 200,
        ignoreRegExpLiterals: true,
      }],

      "@stylistic/no-extra-semi": "error",

      "@stylistic/lines-between-class-members": ["error", "always", {
        exceptAfterSingleLine: true,
      }],

      "import/extensions": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-useless-constructor": "off",
      "@stylistic/member-delimiter-style": "error",
      "import/no-unresolved": "off",
      "class-methods-use-this": "off",

      "react/jsx-filename-extension": ["error", {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
      }],

      "react/jsx-props-no-spreading": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["off"],
      "no-restricted-syntax": "off",
      "import/no-named-as-default": "off",
      "@typescript-eslint/ban-types": ["off"],

      "import/no-extraneous-dependencies": ["error", {
        devDependencies: true,
      }],

      "max-classes-per-file": ["off"],
      curly: ["error", "multi-line"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],

      "@stylistic/object-curly-newline": ["error", {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },

        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      }],

      "@stylistic/no-whitespace-before-property": "error",

      "import-newlines/enforce": ["error", {
        items: 3,
        "max-len": 115,
        semi: false,
      }],

      "react/display-name": "off",
      "no-plusplus": "off",
      "@stylistic/no-trailing-spaces": "error",
      "no-shadow": "off",

      "@typescript-eslint/no-shadow": ["error", {
        allow: ["Graph"],
      }],

      "react/button-has-type": "off",
      "react/jsx-one-expression-per-line": ["off"],
      "arrow-body-style": ["off"],

      "@stylistic/quotes": ["error", "single", {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],

      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": ["error", {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      }],

      "@typescript-eslint/ban-ts-comment": "off",
    }
  }
]
