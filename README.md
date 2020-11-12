# Movies fetched from an API

In this project I created a multi-paged website using React Router. Movies are fetched from different API endpoints. 

## The problem

I started writing the different routes I wanted to have and making the structure in App.js. I then created the component 'MovieList' to fetch the API with movies Now playing. The information gotten are then sent to another component 'MovieThumb' that picks out the data I want to show from the API on my page. 

Next I created the page 'MovieDetail' using params to get to the right site for each movie. On this page I fetch details for the particular movie clicked on in the Movie list. In each detailed movie page it is possible to click on a link to get back to the home page.

The hardest part was the styling of both the first page and the detailed page where different elements where to be put above each other. Here I learned new ways ot use CSS, by making element visible and not.

I added a component for page 'Not Found' when the users hits an URL that doesn't relate to a movie in the API. There is thousands of movies to quite hard to hit a 'wrong' url.. 

I did also add a Header text and a Navigation bar. Here I linked more components fetching Movies from other endpoints, like Top Rated Movies and Upcoming Movies. I the navbar it is possible to see which list you are showing currently and it is also possible to click among the different movie lists. In the end I added movies by Theme where I learned to add a <select> element to choose among different themes that fetches different URL's.

For me it was really fun using React router to finally be able to create multi-paged websites. For me that is more useful since in most cases that is how webpages work. Right now I just want to create a lot of pages connecting in the App file to really make it multi-paged.

## Learning Objectives

- Using React router to create multi-page webpages

- Use placeholders in url's to pick dynamic parts from url's

- Using API's in React combining 'useState' with 'useEffect'

## Tech

- React JS

- CSS

## View it live

Link to see the webpage live: https://movieslists.netlify.app/
