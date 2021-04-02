# Project Movies
This is a group project that we made during week 12 in the Technigo Bootcamp. The learning objective was to get familiar with React Router by building apps with multiple pages.

The assignment was to build a multi-page movie list application by fetching data from a specific movie API and mimic a given design in an example app. By using React Router we were tasked to link a displayed list of movies on one page with detailed information for each movie on separate pages.

## How we approached the problem
1. We started off by fetching the data with fetch() and creating necessary components MovieList and MovieThumb for the list of movies. 

2. Then we continued with the details pages, creating MovieInfo placing it in a separate folder named pages. Here again using fetch() we collect all the detailed information from a different API on each movie like rating and overview text. 

3. We then connected the different pages in App.js with React Router. We experienced a few errors during the project connected to the fetch of data and also if the url input is affected by the user. We therefore used conditional rendering to show the page content only if we manage to fetch the detailed information. 

4. If we don’t manage or if the user type in the wrong id of the movie we handle error messaging by throwing an new Error() and catching in catch(). 
Once the error is caught we showan alert message and use useEffect() and useHistory(). to redirect the user back to main page. 

5. With conditional rendering we also created a loader to show for the user when the page is just loading. We have used a react library react-loading-spinner.

6. As a final step we added a Selector component to be able to toggle between different movie listings in a select menu, using different parameters in the API call. 

7. If we had more time we would add some more pages using different endpoints when calling the API to fetch more information on each movie.

### View it live

https://project-movies-klimenko.netlify.app/
