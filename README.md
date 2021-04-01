# Project Movies

This is a project built during Technigo Bootcamp. The project consisted in building a multi-page React application. The focuse was to practice how to use React router to create multi-page applications, using placeholders in urls to pick dynamic parts from urls and using APIs in React - combining `useState` with `useEffect`

## The problem

We started by thinking what the apps would show and how to strucutre the content with pages and components. 

The problems we ran in to were:
-  that the API response for movie details was an object and needed to be converted into an array to use .map, we solved it by adding [] in the second .then around json, but we are sure it could be solved in another way. 
- that we tried to store the API for the movie details in a variable but we got error messages in the console and the fetch could not be completed. We decided to keep it in the fetch. 

If we had more time we would added more data. 

## View it live

View it live at Netlify: https://peaceful-sinoussi-3ac3ce.netlify.app/
