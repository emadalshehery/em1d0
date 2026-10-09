# em1d0 Website

My personal portfolio website: who I am, my content accounts, and the projects I've built. Built with plain HTML, CSS and JavaScript (no frameworks) and fully responsive for phones.

## Sections

- **About:** short intro, interests and skills.
- **Content:** links to my YouTube, Instagram and X.
- **My works:** links to Itch.io, GitHub and LinkedIn, plus project categories:
  - **Web Development:** TKHSUS
  - **Games Development:** EmMu
  - **AI Projects:** GCI 26 HW1 (NumPy), GCI 26 HW2 (Pandas), Stack, DFS and BFS, PyTorch Tensors, House Price NN, MNIST Classifier, GCI 26 HW3, AI Photo Generator
- **Contact:** phone and email.

Clicking a category shows its project tiles. Clicking a tile opens a card with the project's name, a short description, the skills used, and its links.

## Files

```
index.html   page structure and content
style.css    styling, animations and mobile layout
script.js    open/close logic for the panels and the English/Arabic switch
images/      project icons
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
               <p class="ProjectDescription" data-ar="الوصف بالعربية">Short description.</p>
               <ul class="SkillTags">
                   <li>Python</li>
                   <li>PyTorch</li>
               </ul>
               <div class="ProjectLinks">
                   <a href="https://github.com/..." data-ar="عرض الكود المصدري">View Source</a>
               </div>
           </div>
       </div>
   </div>
   ```

Use the same `data-group` value for all projects in one category, so only one card is open at a time. The `data-toggle` on the tile must match the card's `id`.

## Language

The "ع" button switches the site between English and Arabic (and flips the layout right-to-left). Any element with a `data-ar` attribute is swapped to that text, so add `data-ar="..."` to new content you want translated.

## Deploy

Push the files to a GitHub repository and enable **GitHub Pages** (Settings → Pages) to host it for free.

## Author

**Emad Alsheheri**, Computer Science student at King Khalid University.
GitHub: [emadalshehery](https://github.com/emadalshehery)
