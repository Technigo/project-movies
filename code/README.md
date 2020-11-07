# the project: Movies 🍿 🎞️
The task for this project was to build a multi-page react app. Using the Movie db api data to fetch a list of movies  from a specific end point (in my case most popular Ryan Gosling films), display the, on the page and then link to a movie detail page when the user clicks on the specific movie.  

## The main requirements:
1. The app should have at least two pages - one showing a list of movies and one showing it's details. 
2. Follow the design for the example but ok to adjust.

## Higher level requirements:
1. Show a "not found" page if the user tries to visit a movie detail page that has an invalid movie id.
2. Handle loading states using the useState to have some jsx elements showing whilst the fetch is being done. Helps if the user has a slow internet connection.

## What I achieved 💪
1. Used react router dom and imported the following components browser router, switch, route and re-direct. Used them to set up the structure of where I specified the different paths for my FilmList, FilmDetail and NotFound components/pages.
2. In FilmCard used the link component from react router dom in the jsx elements and specified a path to the film path and specified the film id that we get from the api fetch which signifies to the filmDetails component which film the user has clicked on. 
3. In FilmDetail.js created a seperate fetch to the movide db api. This includes the film id that is passed from the FilmList.js using useParams hook. So when the user clicks on the specific film they want to see, the details of the film id is passed here and the details of that film are fetched from the api in the second fetch. This returns an object with all the data which is stored in useState.  
4. Used UseEffect to help the fetch and component mounting to be done once everything a fetch is done. 
5. Used useState and if statament to handle what happens when the fetch is being done. If the user has a slow connection a seperate jsx div will be shown until the fetch is completed. Then the intended jsx elements and data from the api fetch will be shown for that specific film.
6. Implement the Redirect component. This is used if the user inputs an incorrect id in the url. If this is the case they're redirected to the NotFound page where they get a message and a link that they can click on to go back to the FilmList page. 
Also created an if statment in the FilmDetails.js for if the user inputs an incorrect film id then the NotFound component is called.
7. Created a header which is shown on all pages and has a logo for movie db which links to their homepage. 
8. Implemented the design with some slight adjustments. 
9. Made the site responsive for mobil, tablet and desktop devices 💥 

## Tools I used 🧰
1. React, JavaScript, CSS and node.js/react dependancies.
2. Google.
3. Technigo lectures.
4. Stack overflow.

## View it live 🍿
Sit back and enjoy the tp 20 Ryan Gosling films according to imDb https://wonderful-wilson-448fcd.netlify.app/ 

