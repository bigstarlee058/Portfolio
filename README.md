# Portfolio Website

A responsive static portfolio website with four pages:

- `index.html` — Web portfolio
- `banner.html` — Banner and image portfolio
- `dtp.html` — Print/DTP portfolio
- `shopify.html` — Shopify and ecommerce portfolio

## Requirements

You only need a modern web browser. Python 3 is recommended for running a local web server.

## Run locally

Open PowerShell in this project directory:

```powershell
cd E:\Project\portfolio
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

Other pages:

```text
http://localhost:4173/banner.html
http://localhost:4173/dtp.html
http://localhost:4173/shopify.html
```

Stop the server by pressing `Ctrl+C` in PowerShell.

## Alternative Python command

If `python` is not recognized, try:

```powershell
py -m http.server 4173
```

## Project structure

```text
portfolio/
├── index.html
├── banner.html
├── dtp.html
├── shopify.html
├── css/
├── js/
└── img/
```

This is a static HTML/CSS/JavaScript project. It has no build step or package installation.
