# fluffy.github.io

Valentine's Day Interactive Card.

## Development

Run the development server:
```bash
npm start
```

## Build

Build the production version:
```bash
npm run build
```
The output will be in the `dist` folder.

## Deployment to GitHub Pages

To deploy the `dist` folder to GitHub Pages:

1. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to the `gh-pages` branch.

2. In your GitHub repository settings, go to **Pages** and ensure the source is set to the `gh-pages` branch.