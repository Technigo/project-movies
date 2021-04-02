# Project Movies 🎥🎞️

The goal for this project was to build our first multi-page React application using themoviedb.org's API tofetch a list of movies. We fetch a list of movies, display them on a page, and then link to a movie detail page when you click on the movie: we are to achieve this using React Router.

## The problem and how we solved it 💪

We used the provided API To fetch popular movies in the US to show whatever endpoint we wanted to build our list up. We registered to get the API persmissions and started creating the pages. Once we did the fetch, we were able to render the movie's data right away. The main challenge was learning how to use placeholders in the url to pick dynamic parts from the urls in order to make specific selections.

The landing page is defined in App.js, which is also where we include my main React Router Switch, with all the different pages available.

In order to get the list of movies showing, I move into the MoviesList component, which is where I do the main fetch and get data listing all the movies. For this this we used the useEffect and stored the data by setting up a state.
Then, we used the map method on the movies array to generate the different movie cards. Users will be able to click on the different movie cards in order to go to a page showing the movie details.

On the MovieDetails page, we did a new fetch according to the id of the movie that the user has clicked on. It is determined which movie it is by the use of params. 

A lot of time has gone into this project's styling as well: We used mainly Flexboxes to resize the movie cards depending on the device. We also learned more about hovering effects showing text. 

If we had more time, we would like to continue to add more details and capacities to the site: not found customized site, other movie lists classified per genre, etc.

<h2>Technologies used</h2> ⚙️
<ul>
  <li>React</li>
  <li>React router</li>
  <li>API's in React</li>
  <li>Css3</li>
</ul>

## View it live 🍿👀

Take a look at what's hot on the movies front and get your popcorn ready:  https://movie-app-by-estefania-and-irina.netlify.app/
