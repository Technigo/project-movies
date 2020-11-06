# Heimkino - a German movie site

The site gives the user a collection of movies in German, popular and from all time. There are images, a short summary and a rating for each movie. I did the project during the Technigo Bootcamp for frontend developers in Fall 2020.

## What it does

The movie data is fetched from the API at The Movie Database (https://www.themoviedb.org/). 

On the front page, the posters of 20 movies are shown. On hover on one poster, the movie's title and release date appear. When clicking on one of the posters, the user is directed to another page, showing details about the chosen movie, i.e. another image, a short description and a rating. 

There is a back button leading back to the list.

## The approach

The site is built in React, using useState, useEffect and Routes. Every time the front page is mounted, data om the collection of movies is fetched from the API. 
When mounting the details page, another fetch is executed to get detailed data about the choden movie. 

The whole project's design follows basically a given template in desktop view. I additionally made it responsive.

## Browser compatibility

The site is responsive and was tested on Chrome, Firefox and Edge using the respective dev tools. Everything works as expected.

## Tech used

- HTML5
- CSS3
- JavaScript ES6
- React

## View it live

Curious about German movies? View the page live here:
https://heimkino.netlify.app/
