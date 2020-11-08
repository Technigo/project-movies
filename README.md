# Project Movies

The purpose of this project was to fetch a list of movies from [themoviedb.org](http://themoviedb.org/), display them on a page and  link to a movie detail page when clicking on a movie. The design on https://technigo-movies-project.netlify.com/ was to be followed.

This project made me use React router to create multi-page applications and pratice using APIs in React combinining `useState` with `useEffect`

## The problem

After signing up for an API key on [themoviedb.org](http://themoviedb.org/), I studied the structure of the json in Postman.
I first focused on fetching data from the "popular movies API" in the component MovieList.js and displayed it the component MovieCard.js.
Then I used a BrowserRouter structure in App.js and added a route for MovieDetails.js. In this component, I fetched movie details based on the id of the movie selected in the movie list.
I copied the html structure and the css data from https://technigo-movies-project.netlify.com/, which adopts the desktop first approach.

In addition to the minimum requirements, I added a not found page on both routes (movie list and movie details) and a loading page (red level requirements).

Then I added a dropdown to select different movie lists (black level requirements).

I even made the design responsive for tablets and mobile phones. The pages have been tested with good results in different browsers (Chrome, Firefox, Edge and Safari).

If I had more time, I would have added another route level and improved the "go back" button.

## View it live

You can take a look at the result on https://sandrines-movies-project.netlify.app/
You are welcome to visit my pull request https://github.com/Technigo/project-movies/pull/136 and leave some comments about my code.
Enjoy!
