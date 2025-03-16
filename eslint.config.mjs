import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

export default {
  // Extends from ESLint's recommended rules
  extends: ['eslint:recommended'],
  rules: {
    // Disable the no-unused-vars rule globally
    'no-unused-vars': 'off', // Or 'warn' to just warn instead of error
  },
}
