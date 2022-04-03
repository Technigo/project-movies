# Project Movies

Replace this readme with your own information about your project.
Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.
This project is uses API from https://www.themoviedb.org/ to display 20 movie posters that each lead to a detailed page of the movie selected. The page is built with React Routes, Navigation and some styled components.

## The problem

One of the challenges in this project was to display a background image with a url that was fetched from tmdb api. We had never used styled components before and struggled a little with putting the styled component inside the default component function but realised that the styled component needed to be outside the main function. We solved the issue by sending the url as a prop into the styled component and the problem which had seemed daunting to begin with had a surprisingly easy solution.

## View it live

https://top-movies-2022.netlify.app/
