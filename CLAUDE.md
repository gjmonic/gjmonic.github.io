# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal academic portfolio website for George Marten, a PhD student in Economics at Heriot-Watt University. The site is hosted on GitHub Pages.

## Architecture

**Multi-Page Static Site:**
- Separate HTML files for each page (no build step or bundler)
- Standard anchor links for navigation between pages
- Each page contains its own `<head>`, navigation, content, and footer

**Pages:**
- `index.html` - Home page with profile and research summary
- `about.html` - About Me page with bio and photos
- `cv.html` - CV page with LaTeX source toggle
- `research.html` - Research papers with expandable abstracts
- `essays.html` - Non-academic essays list
- `viewer.html` - PDF viewer for essays (loads PDF based on `?essay=` query param)
- `teaching.html` - Teaching experience
- `data.html` - Data sources and methodology

**Styling:**
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Color scheme defined in CSS variables:
  - `--gothic-orange: #fb923c` (bright orange for accents)
  - `--gothic-blue: #1e3a5f` (rich navy for headings/footer)
  - `--gothic-bg: #f0f7ff` (pastel blue background)
- Typography uses Google Fonts: EB Garamond (headings) and Inter (body)
- Neo-Gothic aesthetic with custom `.gothic-border` styling

**Page-Specific JavaScript:**
- `cv.html`: `toggleLatex()` - Show/hide LaTeX source; `LATEX_SOURCE` constant
- `research.html`: `toggleAbstract(id)` - Expand/collapse paper abstracts
- `viewer.html`: Reads `?essay=` param and loads corresponding PDF from `essays/` folder

## Development

No build commands are required. Open any HTML file directly in a browser or use any local server.

## File Structure

- `index.html` - Home page
- `about.html` - About page
- `cv.html` - CV page
- `research.html` - Research page
- `essays.html` - Essays listing page
- `viewer.html` - PDF essay viewer
- `teaching.html` - Teaching page
- `data.html` - Data page
- `images/` - Profile and adventure photos (JPG format, uppercase extension)
- `essays/` - PDF files for essays (referenced by viewer.html)
- `CNAME` - GitHub Pages custom domain configuration

## Adding New Essays

1. Add PDF to `essays/` folder (e.g., `essays/my-new-essay.pdf`)
2. In `essays.html`, add a new link block with `href="viewer.html?essay=my-new-essay"`
3. In `viewer.html`, add entry to the `essays` JavaScript object with title and pdf path
