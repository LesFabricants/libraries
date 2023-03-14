# Libraries Monorepo

## Current Libraries

- [ngx-flex-limitter](./projects/ngx-flex-limitter)
  - A library for limiting the number of lines in a flex container.
- [ngx-progress](./projects/ngx-progress)
  - A library implementing the progress bar mechanic, without any imposed styles

### Commit info

This repository follows the [conventional commit specification](https://www.conventionalcommits.org/)

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types

- feat: A new feature
- fix: A bug fix
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- docs: Documentation only changes
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests

#### Scopes

- **core**: The base of the monorepo
- **demo**: The demo app
- **progress**: The `ngx-progress` library
- **flex-limitter**: The `ngx-flex-limitter` library
