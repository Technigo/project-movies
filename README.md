# Project Movies

This project was made during the Technigo Bootcamp!
The project was made using React and the main goal was to create a multi-page 
using the MovieDB API. 

## The Project

- My home page is PoplularMovieList and there i do a fecth(),i use useState to store the data and useEffect to control the rendering of the page. I also use map() to show all different movies from the API.

- I have hover effect on each movie card that displayes the full title of the movie and the release date. 

- If you click on a movie card you will be redirected to it's own page where i display more info about the movie such as rating and overview. This is possible by creating a new fetch() in MovieDetail with each movies specific id by using params. 

- The MovieDetail page also contains a back button so you easily can go back to the home page (PopularMovieList).  

- In App.js you can find the React Router Hook that makes the routes possible. 


## TECH 
- React
- JSX
- Javascript
- API 
- CSS
- HTML 

## View it live

Here you can see the live page: 
https://technigo-movie-project.netlify.app/