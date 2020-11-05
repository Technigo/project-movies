# Project Movies

This project was to create a multi-paged website using React Router. Movies are fetched with different API endpoints. 

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

I started writing the different routes I wanted and making the structure in App.js. I then created the component 'MovieList' to fetch the API with movies now playing. The information gotten are then sent to another component 'MovieThumb' that pick out the data I want to show on my page from the API. 

Next I created the page 'MovieDetail' using params to get to the right site for each movie. On this page I fetch details above the particular movie clicked on in the previous page. In each detailed movie page it is possible to click on a link to get back to the home page.

The hardest part was the styling of both the first page and the detailed page where different elements where to be put above each other. 

I added a component for page Not Found but have some problems getting right directions to that page. Since the API for movie details includes thousands and thousands of movie id's there is hard to write a id not existing.. 

I did also add a Header text and a Navbar. Here I linked another component fetching Top Rated Movies. I the navbar it is possible to see which list you are showing and it is also possible to click among the different movie lists. 

For me it was really fun using React router to finally be able to create multi-page websites. For me that is more useful since in most cases that is how webpages work. Right now I just want to create a lot of pages connecting in the App file to really make it multi-paged.

## Learning Objectives

- Using React router to create multi-page webpages

- Use placeholders in urls to pick dynamic parts from urls

- Using API's in React combining 'useState' with 'useEffect'

## Tech

- React 

- JSX

- CSS

## View it live

Link to see the webpage live: 
