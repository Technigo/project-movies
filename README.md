# Project Movies
 
The assignment was to build a movie listing, multi-page web application with subpages generated through use of the routing library React Router
 
## The problem
 
Using React Router and its Link component we could generate subpages dynamically, based on data received from the moviedb API GET fetch.
 
We had issues accessing nested arrays inside our movie details state object for some reason. As a workaround we simply extracted the relevant data from the nested array at the point when it was just a regular object, before it was assigned to its state variable, then put the data inside a new state variable.
 
Technologies used:
BrowserRouter setup
Route components
Link components
Slugs
moviedb API
GET fetches
useEffects
useStates
useHistory
 
## View it live
 
Netlify Link:
https://affectionate-goldberg-0fad49.netlify.app/ 
