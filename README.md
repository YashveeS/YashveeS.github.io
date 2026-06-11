# Yashvee Shah, MPH Portfolio Website

A custom static portfolio website designed for GitHub Pages.

## What is included

- `index.html` for the full one-page portfolio
- `styles.css` for responsive styling
- `script.js` for mobile navigation, scroll reveal, and copy-email interaction
- `404.html` for a custom not-found page
- `.nojekyll` so GitHub Pages serves the static files directly
- `assets/Yashvee_Shah_MPH_Resume.pdf` as the downloadable resume
- `assets/favicon.svg` and `assets/social-preview.svg`

## How to publish on GitHub Pages

1. Create a repository named `YOUR-GITHUB-USERNAME.github.io` for a personal GitHub Pages site.
2. Upload all files in this folder to the root of the repository.
3. Go to the repository's **Settings** tab.
4. Open **Pages** from the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/root` folder, then save.
7. Wait a few minutes, then open `https://YOUR-GITHUB-USERNAME.github.io`.

## Recommended edits before publishing

- Replace `https://www.linkedin.com/in/yashvee-shah` if your preferred LinkedIn URL changes.
- Add a GitHub link in the hero section after you create your GitHub profile or repository.
- Replace the initials block with a professional photo by adding `assets/profile.jpg` and updating the hero card.
- Review the resume PDF before making it public online.
- Add project links, writing samples, dashboards, posters, or publications as they become available.

## Local preview

Open `index.html` in your browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
