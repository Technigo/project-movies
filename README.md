# Project Movies

In this week's project, you'll be building your first multi-page React application, and using a fun new API too!

The goal for this week is to use [themoviedb.org](https://www.themoviedb.org/)'s API to fetch a list of movies (more on _which movies_ further down), display them on a page and then link to a movie detail page when you click on the movie.

This time, rather than following designs from a set of images, we'd like you to follow the design which we've created in our example app using the same API:

![Screenshot](https://i.imgur.com/AK1M5KK.jpg)

#### :clapper::clapper::clapper: https://technigo-movies-project.netlify.com/ :clapper::clapper::clapper:

In this app, we've used the API to fetch popular movies in the US. You are free to choose whatever endpoint you'd like to build up your list. You could do the same as us, or you could, for example, show movies which are currently in the cinema, or find movies in a particular genre. It's up to you!

## What you will learn 🧠

- How to use React router to create multi-page applications
- How to use placeholders in urls to pick dynamic parts from urls
- Practice using APIs in React - combining `useState` with `useEffect`

## Using the API ⚡️

You will need to register an account with [themoviedb.org](https://www.themoviedb.org/) and then register for an API key in order to use the API.

When signing up for an API key, it asks a bunch of questions about what the application is for, but don't worry - we've contacted themoviedb.org and checked that they're OK with you all using the API for this purpose and it's all good in the hood. So, this is what you need to do:

1. Signup for [themoviedb.org](https://www.themoviedb.org/account/signup)
2. Go to https://www.themoviedb.org/settings/api/request
3. Select 'developer' & accept the terms
4. Fill in the form requesting an API. You need to select 'Website' in the dropdown and say the use is for Technigo. Like this: ![signup form](https://i.imgur.com/Oogj2xo.png)
5. Submit the form and you should be approved automatically. Copy the _v3 api key_ from the following page.

With your freshly minted API key, you're now ready to start making API requests. The API is well documented at [developers.themoviedb.org](https://developers.themoviedb.org/3), and if you click through onto an endpoint, there's a 'try it out' tab where you can paste in your API key and run a request to see what you get in response. These are the endpoints we used in our example application:

_Fetching popular movies for the list page_

https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

_Don't forget to replace {api_key} with your API key if you copy and paste this_

_Fetching a movie's detais_

https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

_Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this_

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Movie not found_**

Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).

Hint: In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use `.catch()` on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page.

**_Diffrent lists_**

On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.

To implement this, you'd need a new item in your state and connect it to a `<select>`. When the value changes (`useEffect`), you can send a new API request to the appropriate API endpoint and replace your list of movies with the new data.
