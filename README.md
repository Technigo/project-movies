# Project Movies

The goal for this project was to use [themoviedb.org](http://themoviedb.org/)'s API to fetch a list of movies (more on which movies further down), display them on a page, and then link to a movie detail page when you click on the movie.

In this app, we've used the API to fetch popular movies in the US. 

We built the app together by pair programming.

## The problem

At the beginning we had a few issues getting the APIs to display on the page. We fetched data separately in both MovieList and MovieDetails components and used dynamic variables inside the urls to get the data for a spesific movie. It was the first time we used styled components. We used styled components for creating elements which were used more than once, in this case the button. After deploying the site we got an error when refreshing the page and solved it by adding redirection instructions to the netlify.toml file.

## View it live

https://tiina-marianne-movies.netlify.app/
