# Project Movies 🎬

This project's goal is to build a multi-page React application using the MovieDB API. We fetch a list of movies, display them on a page, and then link to a movie detail page when you click on the movie: we are to achieve this using React Router 🔄

I created a version which shows the Popular Movies on the landing page, but also includes a navigation bar which will link to another section including the Top Rated movies of all time. I also implemented a Loading page to show while the fetch is being processed and a NotFound page for when the movie requested does not match anything in the database 💥

## How I solved it - What I learned ⚛

- My landing page is defined in App.js, which is also where I include my main **React Router Switch**, with all the different pages available.
- In order to get the list of movies showing, I move into the MoviesList component, which is where I do the main fetch and get data listing all the movies. For this I used **useEffect** and stored the data by setting up a **state**.
- I then use **map()** on the movies array and generate the different movie cards. Users will be able to click on the different movie cards in order to go to a page showing the movie details.
- On the MovieDetails page, I do a new fetch according to the id of the movie that the user has clicked on. I can determine which movie id it is by the use of **params**. The data fetched for the chosen movie is then passed as props to the **Movie component**, which will show further information.
- The above logic is applied to my section Top Rated Movies, with the only difference being that I fetch data from a different endpoint in order to show a different set of movies.
- I have managed to implement **Loading** and **NotFound** pages by studying the different component states in the console. While the fetch is being processed, our state remains undefined, which is a good state to have a loading page appear. If the fetch fails, the state will show an almost empty object with a property of "success: false". This object only appears on 404, so thought of using this info to redirect to my NotFound page 💡
- A lot of time has gone into this project's **CSS** as well: Used mainly Flexboxes to resize the movie cards depending on the device. Also learned more about hovering effects showing text ✨

## View it live

Get some tips on what movies to show during this weekend's Movie Night, check out my Movie App here and get that corn popping! 🍿 https://vane-project-movies.netlify.app/
