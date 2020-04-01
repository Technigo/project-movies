# Project Movies
This project was made by me at week 12 of the Technigo bootcamp. The assignment was to do a moviedatabase fecth from an API using react router. 
We were supposed to set up the movies and then link to a second page where you could read more about the movie chosen and then link back to the movie list. 


## The problem

My first big problem and meltdown was when I hit the second page and couldnt fetch the API's information. Not until the day after I realised I was trying to "map" out the function, which was not possible since there was only on movie and the information was singular. 
Once I figured that out, my second problem was when I was trying to set the background image on the second page (filmInfo). 
I tried to do it with setting the "background = url", but then my information was never on the backgroundimage but beneath it. I solved it by setting a const and then making it an object and then naming my div by my object. 

## View it live

https://blissful-heisenberg-6117cd.netlify.com/
