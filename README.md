# Project Movies

The goal for this week was to use themoviedb.org's API to fetch a list of movies, display them on a page, and then link to a movie detail page when you click on the movie.
The focus for this week was to use React router to create multi-page applications, use placeholders in urls to pick dynamic parts from urls and to practice using APIs in React - combining useState with useEffect.

## The project

The website is strucutred with three different page-types:
- a movie list home page where the movie cards are displayed, together with title and release date when the user hovers over the card. path '/'.
- a movie detail page for each movie. When the user clicks on a movie card in the movie list they are redirected here. path '/movies/movieid'
- a not found page. The user is redirected here if the user lands on a 404 page. It has a link that redirects the user back to the movie list page.'¨

I used the React router hook in the app.js component, with routes with differnt paths to create a page structure and Switch to render one page at a time.
The fetches are done in the seperate movie pages to get the data needed and then stored in the created useState hooks for each page. 
I also implemented a loader that is displayed before the fetch for each page is done.
For the css, I maninly worked with flex-box to structure the layout. I learned a lot about working with different layers and getting them to cover the entire container/page. The team shared a lot of css-tricks on slack this week which was super helpful!


## View it live

https://popularmoviesproject.netlify.app/
