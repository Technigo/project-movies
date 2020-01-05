# Project Movies / see site here: https://mrsucodesproject12movieproject.netlify.com/

In this project, I've built my first multi-page React application, and used a fun new API too!

The goal was to use [themoviedb.org](https://www.themoviedb.org/)'s API to fetch a list of movies (more on _which movies_ further down), display them on a page and then link to a movie detail page when you click on the movie.


#### :clapper::clapper::clapper: Let's go! :clapper::clapper::clapper:

In this app, I used the API to fetch popular movies in the US.

## What I learned 🧠

* How to use React router to create multi-page applications
* How to use placeholders in urls to pick dynamic parts from urls
* Practice using APIs in React - combining `useState` with `useEffect`

## This is how I got started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## Using the API ⚡️ 

I registered an account with [themoviedb.org](https://www.themoviedb.org/) and then registered for an API key in order to use the API. 

So, this are my steps for that:

1. Signup for [themoviedb.org](https://www.themoviedb.org/account/signup)
2. Go to https://www.themoviedb.org/settings/api/request
3. Select 'developer' & accept the terms
4. Fill in the form requesting an API. Select 'Website' in the dropdown and say the use is for Technigo. Like this: ![signup form](https://i.imgur.com/Oogj2xo.png)
5. Submit the form and it's approved automatically. Copy the *v3 api key* from the following page.

With the freshly minted API key, I'm ready to start making API requests. The API is well documented at [developers.themoviedb.org](https://developers.themoviedb.org/3), and clicking through onto an endpoint, there's a 'try it out' tab where I pasted in the API key and ran a request to see the response. These are the endpoints I could choose to use:

*Fetching popular movies for the list page*

https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

_Reminder to replace {api_key} with the API key if copying and pasting this_

*Fetching a movie's detais*

https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

_Reminder to replace {api_key} with the API key and {movie_id} with the id from the url via react-router while copying and pasting this_

## Rendering images from the API 🖼

Each movie comes with a 'poster', which looks like a cover you'd find in a DVD, and a 'backdrop' which is more like a screen capture from a scene in the film. In the api response for a movie or list of movies, each one has a property for these images, but it looks like this `"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",`. That path to the image is incomplete - it needs a full url.

To get the full url, decide the size image, and the API has a bunch of options for that. Here's the full list of sizes by loading the API endpoint https://api.themoviedb.org/3/configuration?api_key={api_key} (put your api key in place of `{api_key}`). That response looks something like this:

```json
{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": ["w300", "w780", "w1280", "original"],
    "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    "profile_sizes": ["w45", "w185", "h632", "original"],
    "still_sizes": ["w92", "w185", "w300", "original"]
  }
}
```
 It might be a url like this:

```js
`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
```

The resulting url would be https://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg


