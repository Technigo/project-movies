# Project Movies

The goal for this project was to use [themoviedb.org](http://themoviedb.org/)'s API to fetch a list of popular movies, display them on a page, and then link to a movie detail page when you click on the movie. We used React Router for rendering different pages from our App.js component.

We built the app together by pair programming.

## The problem

We started building the project by fetching the data separately in both MovieList and MovieDetails components and used dynamic variables inside the urls to get the data for a spesific movie. It was the first time we used styled components which we used for creating elements which were used inside the application more than once, in this case the button. After deploying the site we got an error when refreshing the page and solved it by adding redirection instructions to the netlify.toml file.

## View it live

https://tiina-marianne-movies.netlify.app/
