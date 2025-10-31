import { config } from "./base.js";

/**
 * ESLint configuration for the eslint-config package itself
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...config,
  {
    ignores: ["node_modules/**", "dist/**"],
  },
];
