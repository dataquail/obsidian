import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import stylistic from "@stylistic/eslint-plugin";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importNewlines from "eslint-plugin-import-newlines";
import unusedImports from "eslint-plugin-unused-imports";
import jestFormatting from "eslint-plugin-jest-formatting";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  stylistic.configs.recommended,
  ...fixupConfigRules(compat.extends(
    "plugin:import/typescript",
    "plugin:@stylistic/disable-legacy",
    "plugin:jest-formatting/recommended",
  )),
  {
    ignores: ["**/*.config.js", "dist/*,", "**/wallaby.js"],
    plugins: {
      "@stylistic": fixupPluginRules(stylistic),
      "@typescript-eslint": typescriptEslint,
      "import-newlines": importNewlines,
      "unused-imports": unusedImports,
      "jest-formatting": fixupPluginRules(jestFormatting),
    },
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
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".ts"],
        },
      },
    },
    rules: {
      "no-console": "off",

      "no-empty-function": ["error", {
        allow: ["constructors"],
      }],

      "no-multi-spaces": "error",

      "no-multiple-empty-lines": ["error", {
        max: 1,
      }],

      "@stylistic/max-len": ["error", {
        code: 115,
        comments: 200,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
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

      "no-plusplus": "off",
      "@stylistic/no-trailing-spaces": "error",
      "no-shadow": "off",

      "@typescript-eslint/no-shadow": ["error", {
        allow: ["Graph"],
      }],

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
    },
  }];