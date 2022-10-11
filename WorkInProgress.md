Nina tis
-ändra i Header.js, link to NavLink added className
-id => movieId (kan det ändras bara i urls.js filen eller måste man ange när den hämtas?)
detta gjode att useEffect verkar sakna en dependency (vill inte ha movieId)
-data.js => urls.js
-changed title in index.html "popular movie app"
(-add Loading component // kanske lägga in mellan man klivkar på filmen tills details sidan har laddat?)
-in PopularMovies, changed movie, setMovie to popMovies, setPopMovies
-struktur popularmovies.js saknar poster url
-url's Dynamic propertys/ placeholders `/movies/:movieId` ? (burger video Mathilda)
//
-app.js
   våran: <Route path="/" element={<PopularMovies />} /> 
   Ex: <Route path="/" exact> <Popular /></Route> det är något med attributet "exact" som verkar viktigt
-img movie poster url (popularMovies.js)
-icon for home arrow