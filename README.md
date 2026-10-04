# em1d0 Website

My personal portfolio website: who I am, my content accounts, and the projects I've built. Built with plain HTML, CSS and JavaScript (no frameworks) and fully responsive for phones.

## Sections

- **About:** short intro, interests and skills.
- **Content:** links to my YouTube, Instagram and X.
- **My works:** links to Itch.io, GitHub and LinkedIn, plus project categories:
  - **Web Development:** TKHSUS
  - **Games Development:** EmMu
  - **AI Projects:** GCI 26 HW1 (NumPy), GCI 26 HW2 (Pandas), Stack, DFS and BFS, PyTorch Tensors, House Price NN, MNIST Classifier
- **Contact:** phone and email.

Clicking a category shows all of its projects at once as square cards. Each card has the project's name, a short description, the skills used, and its links.

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

Inside the category's `<div class="ProjectGrid">` in `index.html` (`WebDevProjects`, `GamesDevProjects` or `AIProjects`), add a card:

```html
<div class="ProjectCard" id="MyProjectInfo">
    <img class="ProjectIcon" src="images/my-icon.png" alt="My Project icon"> <!-- optional -->
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
```

Cards are always visible and sized as squares by `.ProjectGrid .ProjectCard` in `style.css`.

## Language

The "ع" button switches the site between English and Arabic (and flips the layout right-to-left). Any element with a `data-ar` attribute is swapped to that text, so add `data-ar="..."` to new content you want translated.

## Deploy

Push the files to a GitHub repository and enable **GitHub Pages** (Settings → Pages) to host it for free.

## Author

**Emad Alsheheri**, Computer Science student at King Khalid University.
GitHub: [emadalshehery](https://github.com/emadalshehery)
