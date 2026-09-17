# Perry Homes Exterior Selection Builder

Static buyer-facing selector. No build tools or server required.

## Publish on GitHub Pages
1. Create a repository.
2. Upload `index.html`, `selector-data.json`, and the entire `assets` folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Open the Pages URL after deployment.

## What buyers can do
- Build **Option 1** and **Option 2** side by side.
- Choose a stucco/paint color by White, Beige, Greige, or Gray collection.
- See only stone options associated with that paint color in the supplied guide.
- Default to Houston-compatible stone choices; optionally show non-Houston items.
- View the exact accent-theme and front-porch-tile panels from the supplied source page.
- Choose up to two accent colors or use the one-color Dark Option.
- Choose the front porch tile.
- Print/save the final two-card comparison as a PDF.
- Selections persist in the same browser using local storage.

## Editing
The selection data is embedded in `index.html` for zero-dependency hosting, and also saved separately as `selector-data.json` for easier review.
