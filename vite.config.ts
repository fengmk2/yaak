import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    printWidth: 100,
    ignorePatterns: [
      "**/bindings/**",
      "crates/yaak-templates/pkg/**",
      "apps/yaak-client/routeTree.gen.ts",
    ],
  },
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    ignorePatterns: ["npm/**", "crates/yaak-templates/pkg/**", "**/bindings/gen_*.ts"],
    options: {
      typeAware: true,
    },
    rules: {
      "typescript/no-explicit-any": "error",
    },
  },
  test: {
    exclude: ["**/node_modules/**", "**/flatpak/**"],
  },
});
