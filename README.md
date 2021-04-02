# Project Movies

We built a multi page React application containing movies fetched from themoviedb.org API. 


## The problem

The main task was to build a movie web site where the user can toggle the movie gallery by choosing lists. 

We decided early on that we wanted to create an application containing more than two pages. We started by deciding the structure of the pages, starting with a landing page, and what components we needed and their responsibilities. With the plan in place, we proceeded to build the different components and the base structure for the functionality. We added a bar on the top with an icon which took you back to the landing page and two links for the movie lists. When clicking on one of the movie lists the user were directed to another page where a movie gallery was displayed. Upon choosing a movie, the user was directed to another page displaying details of the movie. We also implemented a "Go back" link so that the user could go back to the previously selected movie list. We also added styling to the page according to a given design.

One problem that we encountered was when we tried to move the useParams from the components MovieList and MovieDetails to App.js, it made the node_modules crash. We tried to fix it but ended up moving our code to a new repo instead.

If we had more time, we would implement a handle loading state and more pages to the site containing more information regarding the selected movie. Also, we would've liked to fix the link path in BackLink component to be more dynamic. Right now it's only redirecting to the popular list and not depending on which list the user was previously at. 


## View it live

To view our project, see this link: https://musing-noether-fb9258.netlify.app/
