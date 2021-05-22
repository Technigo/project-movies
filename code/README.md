# Project movies

This is a project by Malin Göthe and Lars Söderman

The assignment was to create a react application that fetches 20 recent movie releases from The Movie Database and present them in a list with poster image and some details that appear on hover. When clicked, each image leads to a dynamically created new page which fetches more detailed information on that movie. The design was provided along with the instructions for the assignment.

We decided to work with functional components for this project, and started by creating the Home component and setting up the fetch for the movie list using useEffect, and storing the data in state variables using useState. Once the fetch was working we rendered the list of movies and made the basic styling for that. We then separated the functionality into MovieList and MovieElement components. After that we applied more detailed styling to get the hover effect to behave as we wanted. We then went on to create the Router functionality (using react-router-dom) which would lead to the Details component which makes a separate fetch request to the API. It took us a while to fully understand how to work with useParams and the router to dynamically create the Details page. When it became time for deploy we ran into some interesting issues with the dependency list in useEffect, and we solved it by restruturing our fetch function in the details component. 

Overall we are very happy with the project and we learned a lot useful stuff about for example BrowserRouter, useEffect and useParams.

The site is live at: https://sharp-montalcini-473ded.netlify.app/

