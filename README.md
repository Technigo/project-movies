# Project Movies

We used the TMDB movie API to create a multi-page website using routes, links, history and params from react-router--dom. The page has a landing page to enter your own API key, a page with all the most popular movies, and a details page for every movie.

## The problem

We created a figma mainly for planning purposes so that we could work asynchronously when needed. We started with a fetch and creating a movies page with the information we got from this, then we used routes, a dynamic path and params in order to create our details page. We added an extra step, using a form input and state to hold a user specific api key, so that we didn't make our own API keys public.

If we were to continue this project, we might think about how to store the api key in a cookie so that refreshing the page doesn't cause issues, or even create a backend alternative so that secret information doesn't get shared to the browser.

## View it live

ru-and-sarah-movies.netlify.app
