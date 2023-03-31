# Project Movies
The task was to create a website for displaying popular movies using and API from themoviedb.org. We were supposed to display the movies, their titles, description and rating. The first page was supposed to display the movies and when the user clicked on a movie, details about that movie would be displayed.

## The problem
We started off by creating the routes in App.js. We decided to create two components: Movie and MovieDetails. We started by using the API to fetch the images for the movies that were supposed to be displayed in the Movie-component. After we got that done we did the fetch request for the MovieDetails-component. In that one we only wanted the info for a particular movie, it took some time but we eventually figured out how the placeholder and the id for the movies worked in order to display info for each movie. We asked code coaches and looked at Stack overflow in order to figure out how they were connected. We decided to add a Loading-component as well that will display when the fetch-request is loading. We also added a NotFound-page where the user will be taken if he/she entered the wrong URL.

After we got it all to work we moved on to styling.

This project was created by Annika Sonnek and Sara Battolotti
## View it live
https://quiet-profiterole-5d3166.netlify.app/