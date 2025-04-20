# Judo Techniques Guide

A web application for Shodan exam preparation, featuring categorized judo techniques with descriptions and video demonstrations from Judo Canada.

![Judo Techniques](Techniques.jpg)

## Overview

This application helps judo practitioners prepare for their Shodan (first-degree black belt) examination by providing a comprehensive reference of judo techniques organized by category. The app includes:

- Categorized techniques (Te-waza, Koshi-waza, Ashi-waza, etc.)
- Technique descriptions and demonstrations
- Embedded YouTube videos from Judo Canada
- Mobile-friendly responsive design

## Features

- **Technique Categories**: Browse techniques by their classification (hand, hip, foot, sacrifice techniques, etc.)
- **Detailed Information**: Each technique includes its Japanese name and English description
- **Video Demonstrations**: Selected techniques include embedded YouTube instructional videos
- **Responsive UI**: Works on desktop and mobile devices

## Getting Started

### View Online

Visit the GitHub Pages site at: [https://YOUR-USERNAME.github.io/judo-techniques](https://YOUR-USERNAME.github.io/judo-techniques)

### Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/YOUR-USERNAME/judo-techniques.git
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
- Vue Router 4 - Navigation/routing
- HTML5/CSS3 - Structure and styling
- FontAwesome - Icons
- No backend required - all data is stored in JavaScript

## Project Structure

- `index.html` - Main HTML file
- `css/styles.css` - Main stylesheet
- `js/` - JavaScript files:
  - `app.js` - Main Vue application and router setup
  - `techniques.js` - Database of judo techniques
  - `home-component.js` - Home page component
  - `technique-components.js` - Technique listing and detail components
- `images/` - Image assets

## Deployment

This project is configured to be easily deployed to GitHub Pages:

1. Push your code to GitHub
2. Go to your repository settings
3. Under GitHub Pages, select the main branch as source
4. Your site will be published at https://YOUR-USERNAME.github.io/judo-techniques

## Future Enhancements

- Add more technique videos
- Include search functionality
- Add filtering options
- Implement a quiz/test feature for exam preparation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Judo Canada for the instructional videos
- All judo instructors who have contributed to preserving these techniques
