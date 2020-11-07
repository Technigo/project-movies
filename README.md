# Project Movies

Week 12's project goal was to build a multi-page React application using data fetched from The Movie Database API.
Once we Fetch the initial movie data we had to display the movies in a list, and then link to a movie detail page when you click on a specific movie. This week we were introduced to React Router in able to achieve this.

## My process

For my landing page I used CSS Grid. I haven't had chance to use Grid before so this seemed like the perfect opportunity to do so.
App.js is where I have defined my React Router Switch, and the different pages available.
Each movie details page displays the information pulled from the movie API and includes an external link to that film's IMDB page (using the IMDB ID provided) and also a back button. This is achieved by using the useHistory hook.
I also created x2 error pages, which return errors if the page url is incorrect or an incorrect movie name/id is entered in the url.

## Tech
- React Router
- useHistory hook
- useParams hook
- JSX
- JavaScript
- API
- CSS Flexbox
- CSS Grid

## View it live

https://jamiecook-movie-night.netlify.app/
