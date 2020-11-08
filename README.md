# Project Movies

A multipage site that shows the current most popluar movies and a details page about the selected movie when clicked. Built in React with data from the TMDB API (https://www.themoviedb.org/)

## The process and problems

The point was to use React Router to build a site with multiple pages. The detail pages about each movie is fetched dynamically using useEffect and useParams, to get the movie ID from the URL and be able to fetch the right data from the API. 

I made an error and loading page (via seperate components) but they don't show up when site is deployed on Netlilfy, If I hade more time, I would troubleshoot this to get the pages to show. 

## View it live

https://movie-project-cornelia.netlify.app/
