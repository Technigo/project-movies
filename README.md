# Project Movies

This project was made by Ida Sylvén and Siri Hemsley and part of Technigo Bootcamp.

The assigment was to create a movie site from The Movie DataBase API and to follow a set design, using React.

## The problem

The general requirements involved creating an app with at least 2 pages, one with the list of movies and one showing the details of a movie. It was supposed to follow the design, but it was okay to change things.

This was the first project using React Router and create components that could link to different routes and use exact and non-exact paths. We were able to fetch both the list and detail API fairly quickly and recreate the design.

We wanted to implement some other features than listed among the strech goals and decided to go for it! First we looked at the API documentation, but didn't find the end points we wanted (genre etc) but we did find that you can connect any list. So we created one list each of our favorite movies and connected those via an API fetch.

Then we also saw that there was a search end point, so we decided to also implement a search bar that we then were able to connect to our Movie Detail page to display the film you wanted to see.

## If we had more time...

- Perhaps go over all code and create some more components/simplify code
- Error message is now only displayed to an empty string, but if we had more time we would look into having it display when the user is trying to search for a film which is not found or making a typo. We have a rough idea how it could be done, but we ran out of time.
- Handling not found page if trying to visit a detail page with invalid movie ID by sending the user back to the start page
- Handle loading states when waiting for the fetch
- We want to include similar movies end point linked from detail page

## View it live

https://eloquent-tesla-2a2f77.netlify.app/
