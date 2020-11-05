# Project Movies - Overview
Project done as a part of Technigo bootcamp.

Use [themoviedb.org](http://themoviedb.org/)'s API to fetch a list of movies (more on which movies further down), display them on a page, and then link to a movie detail page when you click on the movie. This time, rather than following designs from a set of images, we'd like you to follow the design which we've created using the same API.


Learning Objectives:
- How to use React router to create multi-page applications
- How to use placeholders in urls to pick dynamic parts from urls
- Practice using APIs in React - combining `useState` with `useEffect`

## Approach


## Core Tech
- CSS
- API
- React
- React Hooks
- React router
- JSX



## Requirements Completed
🔵  Blue Level
<!-- - Your app should have at least two pages - one showing a list of movies and one showing details -->
<!-- - You should follow the design from our example (but it's ok to change things - just try to make it look nice) -->

🔴  Red Level (Intermediary Goals)
<!-- - Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).
    - **Hint**

        In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use `.catch()` on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page. -->

<!-- - **Handle loading states** - The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page.
    - **Hint**

        Use something like `const [loading, setLoading] = useState(true)` to make it so the page is loading by default, then call `setLoading(false)` once you get the response back from the API.

        You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the user still sees something relevant. -->

⚫  Black Level (Advanced Goals)
<!-- - On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.
    - **Hint**

        To implement this, you'd need a new item in your state and connect it to a `<select>`. When the value changes (`useEffect`), you can send a new API request to the appropriate API endpoint and replace your list of movies with the new data. -->

<!-- - **More pages** - When you load a movie, you get a lot of information in the API response, such as a collection it belongs to, genres it has, or the companies involved with producing the film. Each of these has an API endpoint that can be used to fetch more information about that entity. You could use this data to make links from your movie page to another page. Take a look through the documentation and be creative! 🎨
    - **Example**

        The new Spider-Man film has a list of production companies. You could iterate over this list and add a link to each production company to your page. Then, when the user clicks the link, they go to another page which loads information about that production company and perhaps a list of films which they've produced. -->

## View it live
<!-- link goes here -->