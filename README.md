MovieFinder

MovieFinder is a responsive movie-discovery web app built with vanilla HTML, CSS, and JavaScript. It uses The Movie Database (TMDB) API to help users search for films, explore popular titles, and browse movies by genre.

## Features

- Search for movies by title
- Browse popular and all available movies
- Explore dedicated genre sections
- View each movie's poster, title, and release date
- Fall back to a placeholder image when a poster is unavailable
- Clean, simple, responsive interface

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Getting Started

1. Clone or download this project.
2. Add your TMDB API credentials where the project's JavaScript configuration expects them.
3. Open `index.html` in a browser, or serve the project with a local development server.

> Keep API keys out of public repositories. For a production deployment, route TMDB requests through a secure backend or serverless function rather than exposing a key in client-side code.

## How It Works

MovieFinder requests movie data from TMDB and renders the results as movie cards. Poster paths returned by TMDB are combined with TMDB's image base URL. If a title does not include a poster, the app displays a fallback image so the layout remains consistent.

## Project Goals

This project was created to practice working with third-party APIs, asynchronous JavaScript, dynamic DOM updates, search interactions, and responsive front-end design without a framework.

## Acknowledgements

Movie data and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). This product uses the TMDB API but is not endorsed or certified by TMDB.

## License

This project is intended for personal and educational portfolio use. Add a license file if you plan to distribute or reuse it under specific terms.
