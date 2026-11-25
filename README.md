# Ziyuan Wan — personal academic website

A responsive academic economics website for GitHub Pages, with a landscape banner, a homepage portrait, sans-serif typography, and separate Home, Research, and CV pages. Plain HTML, CSS, and JavaScript; no package installation or build step.

Your biography and email are in `site-config.js`. Current projects are in `research.html`, and the CV is stored in `assets/cv.pdf`.

## Edit in your browser

1. Open this repository on GitHub and sign in.
2. Open the file you want to change and click the pencil icon (Edit this file).
3. Make your edits, then choose **Commit changes** to save them to GitHub.
4. When GitHub Pages is enabled, changes on the publishing branch appear on the website after deployment finishes.

Start with `site-config.js` for your biography and contact details. Keep quotation marks around text; if your text contains an apostrophe, use double quotation marks around that value. To edit several files together, press the period key (`.`) on the repository page to open GitHub's browser code editor. Commit your changes there to save them to the repository.

## Make it yours

- Edit `site-config.js` for your name, biography, contact links, and page metadata. Empty contact links stay hidden.
- Edit `index.html` for the home page, `research.html` for papers, `cv.html` for the CV page.
- Edit `custom.css` for your own colors, fonts, spacing, and layout. It loads last so your rules take precedence.
- Upload a portrait into `assets/`, then set `photo` and `photoAlt` in `site-config.js`. This updates the homepage portrait.
- Add a CV to `assets/` and set `cv` in the configuration.

Keep only content you want to publish in this folder. The surrounding workspace is not part of the website.

## Preview

Open `index.html` directly in a browser, or run `node preview.mjs` and visit the printed local URL. Stop the server with Ctrl+C.

## GitHub Pages

Use the repository `ziyuanwan.github.io` in the `ziyuanwan` account. In repository Settings → Pages, select deployment from a branch, then choose `main` and `/ (root)`. All assets use relative paths.

Editing reference: https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
