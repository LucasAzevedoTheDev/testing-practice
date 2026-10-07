# template-repo

Starter for my webpack projects: webpack, ESLint and Prettier already set up.

## Starting a new project

1. On GitHub, click **Use this template** (don't clone this repo directly).
2. Clone the new repo and run `npm install`.
3. In `package.json`, change `name` and the three GitHub URLs (`repository`, `bugs`, `homepage`) to the new repo.
4. Replace this README.

## Scripts

| Command          | What it does                    |
| ---------------- | ------------------------------- |
| `npm run dev`    | Dev server with live reload     |
| `npm run build`  | Build the site into `dist/`     |
| `npm run lint`   | Check code with ESLint          |
| `npm run format` | Format every file with Prettier |

## Notes

- `node_modules` and `dist` are in `.gitignore`. Never commit them.
- Install new packages with `npm install --save-dev <name>` so they land in `package.json`.
