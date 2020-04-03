# Project Movies

This week I've made a page showing top rated movies using API from themoviedb.org as a weekly project for Technigo boot camp.
The goal was to practice using React Router along with React State and useEffect. 

## The problem

I had to watch code-along recordings a few times to understand the magic of useParams and Link. I still don't understand fully the rule of jsx, e.g. when to use {} or not. It took me a while to figure out that the variables you write in the path for Route should be an existing variable in the API (in this project's case), not just a random name. 

I also had a problem with parsing error in jsx. I found an explanation in Stack Overflow that React jsx doesn't like siblings and therefore you should wrap them with <></>. That solved the issue. 

I still have problem with status code 404 showing up in console and haven't figured out how to fix that. So far I have added _redirects in code/public to deal with this but it seems not fixing the whole problem. 

## View it live

https://sad-minsky-5935bc.netlify.com
