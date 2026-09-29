# em1d0 Website

My personal portfolio website: who I am, my content accounts, and the projects I've built. Built with plain HTML, CSS and JavaScript (no frameworks) and fully responsive for phones.

## Sections

- **About:** short intro, interests and skills.
- **Content:** links to my YouTube, Instagram and X.
- **My works:** links to Itch.io and GitHub, plus project categories:
  - **Web Development:** TKHSUS
  - **Games Development:** EmMu
  - **AI Projects:** GCI 26 HW1 (NumPy), GCI 26 HW2 (Pandas)
- **Contact:** phone and email.

Clicking a category shows its project tiles. Clicking a tile opens that project's name, description, screenshots and links.

## Files

```
index.html   page structure and content
style.css    styling, animations and mobile layout
script.js    open/close logic for the collapsible panels
images/      project icons and screenshots
```

## Run locally

Open `index.html` in a browser. No build step or install needed.

## Add a project

1. Inside the category panel in `index.html` (`WebDevPanel`, `GamesDevPanel` or `AIPanel`), add a tile:

   ```html
   <div class="ProjectTile" data-toggle="MyProjectInfo" data-group="my-group">
       <span class="ProjectTileName">My Project</span>
   </div>
   ```

2. Below the tiles, add its info card with a matching `id`:

   ```html
   <div id="MyProjectInfo" class="collapsible sub-collapsible" data-group="my-group">
       <div class="collapsible-inner">
           <div class="ProjectCard">
               <h4 class="ProjectName">My Project</h4>
               <p class="ProjectDescription">What it does.</p>
               <div class="AccountButtons ProjectLinks">
                   <a class="GitHub" href="https://github.com/...">View Source !</a>
               </div>
           </div>
       </div>
   </div>
   ```

Use the same `data-group` value for all projects in one category, so only one card is open at a time. The `data-toggle` on the tile must match the card's `id`.

## Deploy

Push the files to a GitHub repository and enable **GitHub Pages** (Settings → Pages) to host it for free.

## Author

**Emad Alsheheri**, Computer Science student at King Khalid University.
GitHub: [emadalshehery](https://github.com/emadalshehery)
