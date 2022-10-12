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

-------------------------------------------

Jag vet inte vad "exact>" gör. Och Routes verkar fungera 🤷‍♀️


Linnéa - onsdag
- fixat så bilder och data från API hämtas till details. 
- klistrade in poster-url i popularMovies
- Gjorde en egen mapp för css-filer 
- Började mixtra lite med css i MovieDetails. (alla borders är bara för att hjälpa mig tänka, jag tar bort dem sen)
- skapade en css-fil för PopularMovies och lade in grid. Började fundera över overlay mm men blev bara jättesnurrig. 

att göra:
- länk tillbaka till filmer med icon
- Hover-effect på bilderna i popularMovies där backgrunden blir mörkade och titel dyker upp som overlay.

Frågor: (eventuella "att göra")
- Ska vi ta bort "tillbaka-knappen". Den fyller ju egentlgen ingen funktion i details utan den skulle väl egentligen bara va bra att ha om vi skapar fler sidor att gå till från details. För at komma tillbaka till details och inte till Movies. 

- Ska vi ta bort Header helt? Den krånglar lite med background nu och jag undrar om vi inte skulle kunna strunta i den och använda oss av länkar mm i varje component istället? 