...existing code...

# Recipe — React + Vite

A small React application (Vite) that lists and shows recipes using TheMealDB API. Demonstrates routing, API fetching with axios, simple animations with GSAP, and Tailwind CSS for styling.

## Features

- Browse recipes by category, area (cuisine) and ingredient
- View recipe details (ingredients, instructions, video)
- Responsive UI with a grid of cards
- Loading states and simple GSAP animations

## Tech stack

- React + Vite
- Tailwind CSS
- Axios for HTTP requests
- GSAP for small animations
- TheMealDB (public API)

## Quick start

Prerequisites:

- Node.js 16+ and npm

Install and run:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure (important files)

- src/main.jsx — React entry
- src/App.jsx — router setup
- src/constants.js — API endpoint constants
- src/pages/
  - Home.jsx
  - Area.jsx
  - Ingredients.jsx
  - NotFound.jsx
- src/components/
  - recipeCard.jsx
  - mainRecipe.jsx
  - Loading.jsx
  - cards/LoadingCard.jsx
  - navbar/Nav.jsx

## API

Endpoints are centralized in `src/constants.js` and use TheMealDB:

- Search by name / char / id
- Filter by category / area / ingredient

## Usage notes

- Use the area list or the mobile select to filter by cuisine.
- Clicking a recipe card opens the detailed recipe view.
- Initial load fetches sample recipes.

## Contributing

- Add components under `src/components/`.
- Keep API endpoints in `src/constants.js`.
- Open an issue or submit
