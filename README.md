# Project Movies

This week we did a movie-site using an API. This was our first time using different path
to redirect to other pages. We used React Router and style components for the first time.

## The problem

We fetched popular movies from a movie list using an API key, getting the information about
the movies and displaying them on two different pages, movie list, and movie details.
We also added a not found page when you run into an arrow.
A loader and mostly styled our page with styled components.

We had some problems with the GET of the images in the movie details page showing on the page but
with errors in the console. So in the return before the images we added
movieDetails.backdrop_path && <img..../>
This happened because the component render in the value of movieDetails is state {}.
Once the API returns and we set the value of movieDetails in state the browser loads the images successfully.

If we had more time it would be nice to add different genre options.

## View it live

View deployed page here: https://movie-project-lovisa-mimmi.netlify.app/
