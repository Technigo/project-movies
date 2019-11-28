# Project Movies

In this week's project, you'll be building your first multi-page React application, and using a fun new API too!

The goal for this week is to use [themoviedb.org](https://www.themoviedb.org/)'s API to fetch a list of movies (more on _which movies_ further down), display them on a page and then link to a movie detail page when you click on the movie.

This time, rather than following designs from a set of images, we'd like you to follow the design which we've created in our example app using the same API:

![Screenshot](https://i.imgur.com/AK1M5KK.jpg)

#### :clapper::clapper::clapper: https://technigo-movies-project.netlify.com/ :clapper::clapper::clapper:

In this app, we've used the API to fetch popular movies in the US. You are free to choose whatever endpoint you'd like to build up your list. You could do the same as us, or you could, for example, show movies which are currently in the cinema, or find movies in a particular genre. It's up to you!

## What you will learn 🧠

* How to use React router to create multi-page applications
* How to use placeholders in urls to pick dynamic parts from urls
* Practice using APIs in React - combining `useState` with `useEffect`

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## Using the API ⚡️ 

You will need to register an account with [themoviedb.org](https://www.themoviedb.org/) and then register for an API key in order to use the API. 

When signing up for an API key, it asks a bunch of questions about what the application is for, but don't worry - we've contacted themoviedb.org and checked that they're OK with you all using the API for this purpose and it's all good in the hood. So, this is what you need to do:

1. Signup for [themoviedb.org](https://www.themoviedb.org/account/signup)
2. Go to https://www.themoviedb.org/settings/api/request
3. Select 'developer' & accept the terms
4. Fill in the form requesting an API. You need to select 'Website' in the dropdown and say the use is for Technigo. Like this: ![signup form](https://i.imgur.com/Oogj2xo.png)
5. Submit the form and you should be approved automatically. Copy the *v3 api key* from the following page.

With your freshly minted API key, you're now ready to start making API requests. The API is well documented at [developers.themoviedb.org](https://developers.themoviedb.org/3), and if you click through onto an endpoint, there's a 'try it out' tab where you can paste in your API key and run a request to see what you get in response. These are the endpoints we used in our example application:

*Fetching popular movies for the list page*

https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

_Don't forget to replace {api_key} with your API key if you copy and paste this_

*Fetching a movie's detais*

https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US

_Don't forget to replace {api_key} with your API key and {movie_id} with the id you get from the url via react-router if you copy and paste this_

## Rendering images from the API 🖼

Each movie comes with a 'poster', which looks like a cover you'd find in a DVD, and a 'backdrop' which is more like a screen capture from a scene in the film. In the api response you get for a movie or list of movies, each one has a property for these images, but it looks like this `"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",`. That path to the image is incomplete - it needs a full url.

To get the full url, we need to decide what size image we'd like, and the API has a bunch of options for that. You can find the full list of sizes by loading the API endpoint https://api.themoviedb.org/3/configuration?api_key={api_key} (don't forget to put your api key in place of `{api_key}`). That response looks something like this:

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

This means, that for backdrops (for example), we can choose to render the image at 300px wide, 780px, 1280px, or the original image size. You need to construct a url using the *secure_base_url* + *size* + *path from the api response*.

For example, if we get this in a movie response - `"backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",` - and we want the backdrop at 1280px, we could build up a url like this:

```js
`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
```

The resulting url would be https://image.tmdb.org/t/p/w1280/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg

You do not need to call the configuration endpoint within your app. Just use the sizes which it returns (shown above) to construct urls with appropriate image sizes.

## Hints and tips to complete the project 🤓

As always, start by sketching out your application - not just thinking about design, but how should it be split into components, and how should your routes look?

In the example application we've linked to for you to follow the design from, it's built using two routes which each have one component as a child (it's up to you if you want to use this approach!):

*Route: `/`, component: `PopularList`*

This route is responsible for the home page. It uses `useEffect` to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using `useState`, and then renders them wrapped in a `Link` from `react-router-dom` to link to the detail page.

*Route: `/movies/:id`, component: `Detail`*

This route expects a movie ID in the url and is responsible for showing more details about a movie after you click on it. It uses `useParams` from `react-router-dom` to get the `id` from the url and then passes that into an API call (within `useEffect`) to themoviedb.org to fetch details about a single movie, then puts the response into state using `useState` and finally renders it onto the page.

## Requirements 🧪

* Your app should have at least two pages - one showing a list of movies and one showing details
* You should follow the design from our example (but it's ok to change things - just try to make it look nice)
* Code follows Technigo’s code guidelines.
* Contribute by helping others with this project on Stack Overflow.
* If selected; demo your solution for your team.

## How to hand in the code 🎯

* When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

* Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
* Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the 'project-movies' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also book a tech call. 

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Movie not found_**

Show a 'not found' page if you try to visit a movie detail page with an invalid movie ID (so the user has tried to enter an ID themselves, most likely).

Hint: In this case, when you send a movie detail request with a movie ID which doesn't exist in the API, the API returns with a 404 response. You can use `.catch()` on your promise to catch this exception and toggle some sort of 'error' state which can be used to show an error page.

**_Loading states_**

The API responds quite quickly, but if you're on a slow network then you'd be faced with a black screen until the response comes back. During this time, you could show a loading message or spinner of some sort on the page. Hint: use something like `const [loading, setLoading] = useState(true)` to make it so the page is loading by default, then call `setLoading(false)` once you get the response back from the API.

You could also investigate how to handle the loading of images - or show plain text by default and then use CSS to place the image over the text (using absolute positioning). This way, if the images take a long time to load, the use still sees something relevant.

**_More pages_**

When you load a movie, you get a lot of information in the API response, such as a collection it belongs to, genres it has, or the companies involved with producing the film. Each of these has an API endpoint which can be used to fetch more information about that entity. You could use this data to make links from your movie page to another page.

For example, the new Spider Man film has a list of production companies. You could iterate over this list and add a link to each production company to your page. Then, when the user clicks the link, they go to another page which loads information about that production company and perhaps a list of films which they've produced.

Take a look through the documentation and be creative! :art:

**_Diffrent lists_**

On the homepage where you list popular movies, you could add a dropdown to change the list. For example, you could toggle between popular, upcoming, and new releases.

To implement this, you'd need a new item in your state and connect it to a `<select>`. When the value changes (`useEffect`), you can send a new API request to the appropriate API endpoint and replace your list of movies with the new data.

---

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
