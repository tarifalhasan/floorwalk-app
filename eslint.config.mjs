import react from "@eslint-plugin-react";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactNative from "eslint-plugin-react-native";

export default [
  {
    ignores: ["node_modules", "build", "dist", "android", "ios"], // Ignore common build folders
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-native": reactNative,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "react/jsx-uses-react": "off", // Not necessary with React 17+
      "react/react-in-jsx-scope": "off", // Not necessary with React 17+
      "react-native/no-inline-styles": "off", // Disable warning for inline styles if needed
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettier,
];
