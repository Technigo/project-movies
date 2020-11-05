# Project Movies 🎬

This project is a React app with three pages - one showing a list of movies, one showing details about single movies and one showing a 'not-found-page'. I use the themoviedb.org's API to fetch movies and details data for the movies.

## View it live 👀

https://practical-varahamihira-bdcd3b.netlify.app

My project meets the requirements of having at least two pages and following the provided design. As an added feature I also have a re-directed 'not found' page if a user enters an invalid movie ID. From this page the user can go back (via Link form react-router-dom) to the movies list page. 

For this project I have learnt and practiced:

- How to use React router to create multi-page applications
- How to use placeholders in urls to pick dynamic parts from urls
- How to use APIs in React - combining `useState`, `useEffect` with `useParams`

I have also learnt about Route and how to use Link to connect pages together. I created a PopularList component with Route. This route is responsible for the home page. It uses `useEffect` to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using `useState`, and then renders them wrapped in a `Link` from `react-router-dom` to link to the detail page.

The second component MoviesDetails has a route that expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses `useParams` from `react-router-dom` to get the `id` from the URL and then passes that into an API call (within `useEffect`) to themoviedb.org to fetch details about a single movie, then puts the response into state using `useState` and finally renders it onto the page.

The third component NotFound has a route that redirects the user from a 404 to a custom page. From here the user can get back to the homepage - I use Link to take the user back.


## Methods and Tools
- Route, Link and Redirect from react and react-router-dom
- useParams, useState and useEffect
- fetch()

## With a little help from my friends...
As always, I have expanded my knowledge with the help of the team, Stackoverflow, Google and our code coaches.

## Next step
As a next step, I would like to build larger sites with more pages and more interactivity. 




