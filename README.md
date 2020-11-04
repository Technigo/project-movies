# Project Matinee Movies 🍿
This project's goal was to use React ⚛️ to build a multi-page website using the MovieDB API, fetch the movies from the API, display them on a page and then link to a movie specific page when the movie gets clicked
by using React Router.

## Planning & What I learned 🧩
- My app consists in two main components, the home page and then the pages for each movie. 
- The home page, which is my MoviesList is where all the movies cards are displayed, by doing a fetch(), using the useState to store the data and the useEffect React hooks and then a map()
so the cards for each movie can be displayed. 
- When the user hovers over the movie the card, they will be able to see the movie's original title, as well as, the release date, also fetched from the API. Then when the movie cars is clicked, 
this will redirect the user to the movie details page. 
- To build the movie details page a new fetch this time by the movie specific id and then using params, so afterwards I can use the data to display the details regarding each movie. 
- Then in the app.js is where I use the React Router hook, in order to establish the path for the home page and specific movie details pages. 
- I also implemented Responsive design. 

With this project I learned how to use the React Router hook and was also able to consolidate knowldge regarding useEffect, useState and asynchronicity. 

## Tech ⚡️
- HTML
- JSX
- React
- Javascript

## View it live 🔴
https://matinee-movies.netlify.app/
