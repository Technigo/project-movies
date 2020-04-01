# Project Movies

Replace this readme with your own information about your project.

The goal was to create a website displaying information about films from an API. The site needed two pages:
one to display a film poster, title and release date for each film, another to show the details of a selceted
film.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

I fetched the API in a useEffect function and then mapped through the contents to create a list of clickable films. I used 
react router to make each link lead to another page displaying information about the film. I used useParams to
check the film title against the fetched list in order to specify which film to display the details of. I also used two more
api calls to get review information and more recommended films. 

I decided to create a 'seen' button for my website which used localStorage to save whether a film had been seen or not. I then
used this to conditionally style the film's poster and updated a films counter at the bottom of the page. 

## View it live

https://angry-carson-9ce19e.netlify.com
