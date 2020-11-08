# Project Movies 🍿

The goal for this week was to create a multipage React application using React router and themoviedb.org's API to fetch a list of popular movies and display them on a page. When the user hovers over each movie they will see the movie's title and release date. When clicking on a movie the user will be redirected to a page with detailed information about the choosen movie. 

## Solving the assignment
- I started out with planning and structuring the contents of my project into two components (MovieList and MovieThumb). I also added separate components for header and the previous/back-button. After that I also added seperate pages for the movie details and a 404/not-found-page.  

- The fetch of information from the API is done in two steps: 
-- The list of movies is fetched in the MovieList component, using useState to store the information from the API, useEffect and then .map() to render the list of movies, mounting the MovieThumb-component and showing each movie in a section on the page. 

-- The fetch for the details about each movie is done in the movie details-page, using the useParams hook to get the id for the path to each movie.

- React router is used in App.js to create the paths for the start-page and movie-details page. 

## Future development
Things I want to develop further when I have the time: 
- Get the custom 404-page to work.
- Add more pages and info from the API.
- Add loaders and dropdown-menu.

## Learning Objectives
In this project I've learned about React router and how to create multi-page applications/web pages in React. I've also learned more about using API:s in React, gained a deeper understanding of the 'useState' and 'useEffect' hooks and how to combine them.

## Tech
- React
- JSX
- CSS

## View it live 👩‍💻
Link to the deployed project on Netlify: 
https://movie-toplist.netlify.app/