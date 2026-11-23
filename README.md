# Ziyuan Wan — personal academic website

A responsive academic economics website for GitHub Pages. Plain HTML, CSS, and JavaScript; no package installation or build step.

The biography, research, teaching, CV, and contact details are ready to be filled in. The geometric artwork is a sample design that can be replaced with a portrait or your own work.

## Edit in your browser

1. Open this repository on GitHub and sign in.
2. Open the file you want to change and click the pencil icon (Edit this file).
3. Make your edits, then choose **Commit changes** to save them to GitHub.
4. When GitHub Pages is enabled, changes on the publishing branch appear on the website after deployment finishes.

Start with `site-config.js` for your biography and contact details. Keep quotation marks around text; if your text contains an apostrophe, use double quotation marks around that value. To edit several files together, press the period key (`.`) on the repository page to open GitHub's browser code editor. Commit your changes there to save them to the repository.

## Make it yours

- Edit `site-config.js` for your name, biography, contact links, and page metadata. Empty contact links stay hidden.
- Edit `index.html` for your research papers, teaching, and personal section. Add links to your papers or notebooks when available.
- Edit `custom.css` for your own colors, fonts, spacing, and layout. It loads last so your rules take precedence.
- Replace `assets/design-study.svg` with your artwork, or change the image path and descriptive alt text in `index.html`.
- Add a CV to `assets/` and set `cv` in the configuration.

Keep only content you want to publish in this folder. The surrounding workspace is not part of the website.

## Preview

Open `index.html` directly in a browser, or run `node preview.mjs` and visit the printed local URL. Stop the server with Ctrl+C.

## GitHub Pages

Use the repository `ziyuanwan.github.io` in the `ziyuanwan` account. In repository Settings → Pages, select deployment from a branch, then choose `main` and `/ (root)`. All assets use relative paths.

Editing reference: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
