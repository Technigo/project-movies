# Project Movies 🎬
Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## View it live 👀
https://practical-varahamihira-bdcd3b.netlify.app

- Your app should have at least two pages - one showing a list of movies and one showing details
- You should follow the design from our example (but it's ok to change things - just try to make it look nice)

Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).

use themoviedb.org's API to fetch a list of movies (more on which movies further down), display them on a page, and then link to a movie detail page when you click on the movie.
- How to use React router to create multi-page applications
- How to use placeholders in urls to pick dynamic parts from urls
- Practice using APIs in React - combining `useState` with `useEffect`

*Route: `/`, component: `PopularList`*

This route is responsible for the home page. It uses `useEffect` to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using `useState`, and then renders them wrapped in a `Link` from `react-router-dom` to link to the detail page.

*Route: `/movies/:id`, component: `Detail`*

This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses `useParams` from `react-router-dom` to get the `id` from the URL and then passes that into an API call (within `useEffect`) to themoviedb.org to fetch details about a single movie, then puts the response into state using `useState` and finally renders it onto the page.
## The problem

## Methods and Tools
- Route, Link and Redirect from react and react-router-dom
- useParams, useState and useEffect
- fetch()

## With a little help from my friends...
As always, I have expanded my knowledge with the help of the team, Stackoverflow, Google and our code coaches.

## Next step
As a next step, I would like to build larger sites with more pages and more interactivity. 




