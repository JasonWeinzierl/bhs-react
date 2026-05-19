# Agent Setup

Use these steps at the start of a local agent session.

## Local environment

1. `nvm install v24`
2. `nvm use v24`
3. `corepack enable`
4. `yarn install`

## Common CI-aligned checks

From repository root:

- Commitlint requirements:
  - Commit messages must follow commitlint/conventional commit format (for example: `feat: ...`, `fix: ...`, `docs: ...`).
  - PR titles should also follow the same commitlint format so squash-merge commit messages stay valid.
  - Validate the latest commit locally with: `yarn commitlint --last --verbose`

- App checks:
  - `yarn workspaces focus @bhs/react`
  - `yarn workspace @bhs/react lint`
  - `yarn workspace @bhs/react typecheck`
  - `yarn workspace @bhs/react test-ci`
- E2E lint:
  - `yarn workspaces focus @bhs/e2e-web`
  - `yarn workspace @bhs/e2e-web lint`
