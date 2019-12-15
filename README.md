Project 12, Movie-site, build during Technigo Bootcamp fall 2019!

## 1. What is this?

In this week's project, we used React to build a multi-page application, fetching data to show the most popular movies. 

## 2. What did I do?
I started of by deciding how many components I wanted for this project and what they would show. So I created one component that would list all the movies, and then another one that would show the details for a specific movie. I used (https://www.themoviedb.org/)'s API to fetch the movies and to display them on the first page and then I did another fetch to create the link that would send the visitor to a detail page when clicking on the movie.

I used `useEffect`, `useState` and even added a new hook, `useParams` for this project. I used `useParams` from `react-router-dom` to get the `id` from the url and then I passed that into an API call (within `useEffect`) to themoviedb.org to fetch details about a single movie, then I put that response into state using `useState`. 

## 3. Where can you see it in action?

This is where you can find my deployed project:
https://popular-movie-site.netlify.com/