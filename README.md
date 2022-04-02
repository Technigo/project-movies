# Project Movies - By Louisa Lundgren and Mathilda Karlsson

This week assignment was to build a movie site with two different pages using React Routes. We were to fetch information from an API that we got from themoviedb.org and use this to show posters and information about some popular/new movies. We should follow a given design and we could choose if we wanted to do it in regular css-files or by using 'styled components'.

## The problem

We started with creating two components, one for the homepage 'MovieCards' and one for the details-page 'MovieDetails'. Then we fetched the movie-information from API that we got from the database. We fetched the details for each movie using mapping. This information was put into correct component. To pass information between components we used useState and useParams.
We had issues with displaying the fetched content on the webpage, and solved this by importing and using Link from react-router-dom. 

The components was then rendered in an 'Overview' page. Using React Router we could make a site where the user can navigate between the two pages using link/button. To make the back-button link to the homepage we used useNavigate.
We struggled with using the poster images we fetched as a background for each movie in our 'MovieDetails'-page and got help from our team using styled components to pass it in as a backdrop-prop wich solved this. 

We styled the pages using separate css-files for MovieCards and MovieDetails. We also tried out styled components and used this, as mentioned above, to style the backdrop-image and also the back-button.


## View it live

https://cinema-movies-app.netlify.app/
