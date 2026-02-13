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
The output will be in the `docs` folder.

## Deployment to GitHub Pages

To deploy the website:

1. Run the build script:
   ```bash
   npm run build
   ```
   This will generate the production-ready files in the `docs` folder.

2. Commit and push the changes to the `main` branch:
   ```bash
   git add docs/
   git commit -m "Update production build"
   git push origin main
   ```

3. In your GitHub repository settings, go to **Pages**. Under **Build and deployment > Service**, ensure the source is set to **Deploy from a branch**. Under **Branch**, select `main` and change the folder from `/ (root)` to `/docs`.