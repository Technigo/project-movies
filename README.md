# Project Movies - Overview
Project done as a part of Technigo bootcamp.

Use [themoviedb.org](http://themoviedb.org/)'s API to fetch a list of movies, display them on a page, and then link to a movie detail page when you click on the movie. This time, rather than following designs from a set of images, we'd like you to follow the design which we've created using the same API.


Learning Objectives:
- How to use React router to create multi-page applications
- How to use placeholders in urls to pick dynamic parts from urls
- Practice using APIs in React - combining `useState` with `useEffect`

## Approach


## Core Tech
- React
- JSX
- CSS
- API


## Requirements Completed
🔵  Blue Level
- Your app should have at least two pages - one showing a list of movies and one showing details
- You should follow the design from our example (but it's ok to change things - just try to make it look nice)

🔴  Red Level (Intermediary Goals)
- Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).

<!-- - **Handle loading states** - The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page.
    - **Hint**

        Use something like `const [loading, setLoading] = useState(true)` to make it so the page is loading by default, then call `setLoading(false)` once you get the response back from the API.

        You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the user still sees something relevant. -->

⚫  Black Level (Advanced Goals)
- On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.

- More pages


## View it live
https://pwangy-movies.netlify.app/