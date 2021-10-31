# Project Movies

This week we'll be focusing how to make react apps with multiple pages using routes. You'll also learn how to style your site in a new way, with styled components. 
We will round Sprint 3 of this boot camp off by creating your very own movies site. You'll be building your first multi-page React application, and using a fun new API too. 

The goal for this week is to use [themoviedb.org](http://themoviedb.org/)'s API to fetch a list of movies (more on which movies further down), display them on a page, and then link to a movie detail page when you click on the movie.

This time, rather than following designs from a set of images, we'd like you to follow the design which we've created in our example app using the same [API] (https://technigo-movies-project.netlify.app/)

## Using the API ⚡️

You will need to register an account with [themoviedb.org](https://www.themoviedb.org/) and then register for an API key in order to use the API. This is what you need to do:

1. Signup for [themoviedb.org](https://www.themoviedb.org/account/signup)
2. Go to [https://www.themoviedb.org/settings/api/request](https://www.themoviedb.org/settings/api/request)
3. Select 'developer' & accept the terms
4. Fill in the form requesting an API
5. Submit the form and you should be approved automatically. Copy the v3 api key from the following page.
The API is well documented at developers.themoviedb.org, and if you click through onto an endpoint, there's a 'try it out' tab where you can paste in your API key and run a request to see what you get in response. These are the endpoints we used in our example application: 

### Fetching popular movies for the list page
[https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1](https://api.themoviedb.org/3/movie/popular?api_key=%7Bapi_key%7D&language=en-US&page=1)


### Fetching a movie's details
[https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US](https://api.themoviedb.org/3/movie/%7Bmovie_id%7D?api_key=%7Bapi_key%7D&language=en-US)

## The problem

This week, I started with the css design with fake data. Then I followed the instructions to fecth data in the 'themoviedb.org' API and get the movies, and the react-router was included to switch between pages. Finally I added a loader because the movies fecth takes some miliseconds. I fix some css details at the end to achieve the design.

## View it live

See: https://project-movies-priscilaalfaro.netlify.app/

## Usage

1. Install required dependencies with npm: `npm install` in code
2. Start the project: `npm start`
