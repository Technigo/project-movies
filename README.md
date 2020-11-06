# Project Movies[View Live!](https://suspicious-pike-e44788.netlify.app/)
In this week project, I have built my first multi-page React application, using a fun new API from themoviedb.org!

The goal was to use themoviedb.org's API to fetch a list of movies, in my case Popular movies, display them on a page, and then link to a movie detail page when you click on the movie.

To do this we have used React Router.

## The process and structure
I have reached the **RED LEVEL** 🔴

Also in this project I started to draw a skeleton of my pages on a piece of paper (write down HTML-tags to use).

I started with two components, PopularList.js and MovieDetail.js and did the fetch in each component.

I took inspiration from the codealong video with Damien.

After I had the data and HTML-tags I wanted on each page I started with styling, first out was PopularList.js and later on MovieDetail.js. 

When this was done I decided to split up the code by creating component MovieThumb.js to be used in PopularList and BackButton.js (& and BackArrow.js) to be used in MovieDetail.js.

For the red level I have a Loader.js and NotFound.js component.

### Core Tech

* React Router
* useEffect Hook
* useState Hook
* useParams
* Fetch (GET)
* CSS3

If I had more time I would have wanted to present more information as for example genres on Movie Detail Page or add a dropdown to choose different categories to list (latest, now playing, top rated or upcoming).

Another reflection from me is that it's an art to split the code into good building blocks and which HTML-tags to use and give them good class names.
 
## View it live

Let's see which movies are Popular :-) [here](https://suspicious-pike-e44788.netlify.app/)!

