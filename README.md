# Project 12 - Movie site

### Summary

A movie site created with React and React router to showcase movies from themoviedb.org's API.

### Implementation details

Yet another fun project to work on. I'm really happy with the end result, especially the grid on the movie list page. It's so nice and responsive.

On mobile devices I decided to disable hover state with media queries since it can be pretty annoying when the hover gets stuck and you have to click again to get somewhere.

As far as the JavaScript code goes I have built upon my previous coding patterns.

I decided to also make use of the different image sizes provided by the API, for backdrops and posters, to reduce load time and data transfer. After doing some research I implemened logic for responsiveness (with grid size awareness) in a separate React component. Now the most optimal image is loaded at any given time.

When resizing the movie list page you can clearly see in the developer tools how the image URLs are switching constantly.

Finally I decided to implement infinite scroll which basically means that you can keep scrolling on the page and new movies will constantly be loaded and presented on the screen. Infinite scroll is a more modern version of the traditional pagination feature.

### Technologies used

- HTML
- CSS
- Javascript
- SASS
- React
- React Router

### APIs used

- The Movie Db API (www.themoviedb.com)

### Learning objectives

- How to use React router to create multi-page applications
- How to use placeholders in urls to pick dynamic parts from urls
- Practice using APIs in React - combining `useState` with `useEffect`

### Where can you see it in action?

URL to live site: https://romantic-goldberg-1c109a.netlify.com/
