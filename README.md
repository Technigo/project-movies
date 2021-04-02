# Filmoona (Project Movies)

**Mission:** 

*Build a multipage app with react-router-dom*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 COMPLETE (all)
- ⚫ Partial


***

## Installation

Navigate to the project folder and run the following command

```
$ cd code 
$ npm install
```


This app has been generated using `create-react-app`.
> This app uses the following npm packages that are not included in the `create-react-app`:
> * [fontawsome](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
> * [moment](https://momentjs.com/)
> * [styled-components](https://styled-components.com/docs/basics)

**To start the project**

```
$ cd code 
$ npm start
```
## ✅ Features ✅
***
*The following are the main features of this application:*
  
  * Main page lists trending movies from this [DB](https://www.themoviedb.org/)
    * click on movie => directs to `/movies/:id`
  * Movie page
    * Details with poster and backdrop
    * Title, year, summary, genres (only top 3 genres) & user rating average from [theMovieDB](https://www.themoviedb.org/)
    * If the movie is part of a collection this is also displayed
      * click on collection => directs to `/collection/:id`
  * Collection page
    * Details with poster and backdrop
    * Name, description
    * List of movies in the collection (sorted by release year)
      * click on movie => directs to `/movies/:id`
  * Back button
    * Each page (except main) has back button => directs to previously visited page
  * Header
    * click on title => directs to `/`


***
## 💭 Reflections 💭
All in all this project was really hard for me to start working on. I struggled alot with getting inspired to even begin. However half-way through the week I managed to pull myself together and get cracking!

Once production had begun it was easy to get everything running. Also, I actually managed to create a custom hook for the fetch request function! 😃 So happy about this!
<br><br>
Issues that came up:
- My main issue (apart from lack of inspo.) was to get structure the project in a sensible way. I knew what paths I needed but since my design ideas changed throughout the week I struggled with making useful components. But I managed to solve this eventually as my design got clearer.


If I were to continue on this project / start over I would:
- Add more lists
- Work on the responsiveness more
- Look over my structure for components, try to find ways to minimize the amount of imports I have.

<br>

***

## View it live

https://filmoona.netlify.app/