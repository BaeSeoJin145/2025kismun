# KISMUN’25 Website

[한국어](README.md)

This is the conference website for the 2025 Korean International School Model United Nations (KISMUN). It provides conference information, country allocation, committee pages and chair reports, Secretariat and staff profiles, director information, and committee photo galleries.

## Run locally

The site is static and requires no package installation or build step. From the repository root, start a local web server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. HTML and CSS use relative asset paths, so static files also load under a GitHub Pages project subpath. Serve the site over HTTP locally.

## Pages and files

- `index.html`: home page
- `conference.html`: conference schedule and information
- `country-allocation.html`: country allocation sheet link
- `committee.html`: committee directory
- `committee-*.html`: committee topics, photos, and related resources
- `secretariats.html`: Secretariat profiles
- `staff.html`, `staff-*.html`: staff and team profiles
- `directors.html`: director profiles
- `assets/`: shared CSS, JavaScript, logo, and background image
- `img/`, `photogallery/`: profile, committee, and gallery images
- `chair-report/`: committee chair report PDFs

## Technology

This static website is built with HTML, CSS, and vanilla JavaScript. `assets/app.js` handles interactive tabs and the image lightbox. No external framework or build process is required.
