module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.svelte"],
      parser: "@typescript-eslint/parser",
      overrides: [
        {
          files: ["*.svelte"],
          processor: "svelte3/svelte3",
        },
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        extraFileExtensions: [".svelte"],
      },
      plugins: ["svelte3", "@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
      },
      settings: {
        "svelte3/typescript": true, // load TypeScript as peer dependency
      },
      extends: [
        // then, enable whichever type-aware rules you want to use
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
};
