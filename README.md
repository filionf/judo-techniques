# Judo Techniques Guide

A web application for Shodan exam preparation, featuring categorized judo techniques with descriptions and video demonstrations from Judo Canada.

## Overview

This application helps judo practitioners prepare for their Shodan (first-degree black belt) examination by providing a comprehensive reference of judo techniques organized by category. The app includes:

- Categorized techniques (Te-waza, Koshi-waza, Ashi-waza, etc.)
- Technique descriptions and demonstrations
- Embedded YouTube videos from Judo Canada
- Mobile-friendly responsive design

## Features

- **Technique Categories**: Browse techniques grouped as Nage-waza (throws) and Katame-waza (grappling), each with its English meaning
- **Search**: Find any technique or kata by name or meaning, with or without hyphens and accents
- **Random practice**: Quiz yourself on random techniques with the details hidden until you reveal them
- **Favorites and notes**: Star techniques and keep personal notes, saved in the browser
- **English and French**: Switch language from the header
- **Detailed Information**: Each technique includes its Japanese name and English description
- **Video Demonstrations**: Selected techniques include embedded YouTube instructional videos
- **Katas**: The seven Kodokan katas with official Kodokan demonstration videos, required grades, and Judo Québec reference documents
- **Tie your belt**: A short video showing how to tie a judo belt
- **Responsive UI**: Works on desktop and mobile devices

## Getting Started

### View Online

Visit the site at: [https://judo.francisfilion.com](https://judo.francisfilion.com)

### Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/filionf/judo-techniques.git
   ```

2. Navigate to the project directory:

   ```
   cd judo-techniques
   ```

3. Open `index.html` in your browser or use a local server:

   ```
   # Using Python 3
   python -m http.server 8080
   ```

4. Open your browser and go to `http://localhost:8080`

## Technologies Used

- Vue.js 3 - Frontend framework
- Vue Router 5 - Navigation/routing
- Vue I18n 11 - English/French translations
- HTML5/CSS3 - Structure and styling
- FontAwesome - Icons
- No backend required - all data is stored in JavaScript

## Project Structure

- `index.html` - Main HTML file
- `css/styles.css` - Main stylesheet
- `js/` - JavaScript files:
  - `app.js` - Main Vue application and router setup
  - `state.js` - App state (levels, favorites, notes) persisted to localStorage
  - `techniques-data.js` - Database of judo techniques and family videos
  - `katas-data.js` - Katas (videos, grades, reference PDFs) and the belt-tying video
  - `techniques.js` - Technique filtering and random-technique helpers
  - `*-component.js` - Page components (home, family, technique detail, favorites, katas, belt, header, root)
  - `i18n/` - English and French translations
- `sw.js` - Service worker for offline caching. On each release, bump `APP_VERSION` and the matching `?v=` on the local CSS/JS URLs in `index.html` (a new page must never load older files from a cache)

Libraries are loaded from CDNs with pinned versions and Subresource Integrity hashes in `index.html`. When upgrading, update the URL and regenerate the hash:

```
curl -sL <url> | openssl dgst -sha384 -binary | openssl base64 -A
```

## Deployment

This project is configured to be easily deployed to GitHub Pages:

Pushes to `master` are deployed to GitHub Pages by the workflow in `.github/workflows/static.yml`. The site is served at https://judo.francisfilion.com.

## Future Enhancements

- Implement a quiz/test feature for exam preparation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Kodokan for the instructional videos
- All judo instructors who have contributed to preserving these techniques
