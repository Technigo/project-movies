# Project Movies
The aim of this project was to build a multi-page movie application, that shows a list a popular releases. The project had to be built using react-router-dom.

## The problem
Overall, the React/JavaScript part went smoothly, but we had a problem fetching the data in MovieDetails. The problem turned out to be that we had replicated fetch from App.js, where we had fetched data.result. Result turned out to be a specific level in the json for the list. In MovieDetails we had to fetch the list from the top level.
The CSS was a struggle, especially responsiveness and working with the images from the API.

## View it live

https://gregarious-crostata-717649.netlify.app/
