module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "build", "ci", "docs", "perf", "refactor", "test"],
    ],
    "scope-enum": [2, "always", ["core", "demo", "progress", "flex-limitter"]],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: "A new feature",
            title: "Features",
          },
          fix: {
            description: "A bug fix",
            title: "Bug Fixes",
          },
          docs: {
            description: "Documentation only changes",
            title: "Documentation",
          },
          refactor: {
            description:
              "A code change that neither fixes a bug nor adds a feature",
            title: "Code Refactoring",
          },
          perf: {
            description: "A code change that improves performance",
            title: "Performance Improvements",
          },
          test: {
            description: "Adding missing tests or correcting existing tests",
            title: "Tests",
          },
          build: {
            description:
              "Changes that affect the build system or external dependencies",
            title: "Builds",
          },
          ci: {
            description: "Changes to our CI configuration files and scripts",
            title: "Continuous Integrations",
          },
        },
      },
      scope: {
        description: "What is the scope of this change",
        enum: {
          core: {
            title: "core",
            description: "The base of the monorepo",
          },
          demo: {
            title: "demo",
            description: "The demo app",
          },
          progress: {
            title: "progress",
            description: "The 'ngx-progress' library",
          },
          "flex-limitter": {
            title: "flex-limitter",
            description: "The 'ngx-flex-limitter' library",
          },
        },
      },
    },
  },
};
