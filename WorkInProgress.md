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

-------------------------------------

Nina Onsdag kväll:

-strulade lite innan jag kunde göra en git pull, va nåt jag inte hade sparat i denna filen innan jag commitade =)

-Visst utgår vi ifrån mobile i css'en och kör media querys för tablet och desktop?!

- ska vi döpa filerna enl förslag, för att lättare skilja på filtyperna?
Förslag: CSS-filernas namn med camelCase och js-filerna med PascalCase (upper CamelCase)

- tänker att "tillbaka knappen" är bra för att gå från details till main stie utan att använda back-knappen i browsern.

- fixat Header.

-rubrik till css-filerna
/*===========  MEDIA QUERY  ---------------*/

-Ändrat i App.js till "exact", det funkar inte än som det ska men det stör inte så länge, jag löser det i morn

/By using React Router's exact prop on the first route, you can ensure that the route will match only if the current URL is an exact match./

-fixat css i PopularMovies.css 
   -overlay
   -text hoover (spiller över på den svarta ramen, behöver fixas)

Fastnade med overlay, hade en bokstav fel i en selector visket strulade till det till jag fann problemet.

Fortsätta:
- <p> text overlay, tycker vi ska försöka få till raiting här.

-fixa "tillbaka/home" länken i MovieDetails

Linnéa du kan ju fortsätta med stylingen i movieDetails.

--------------------------------------------------------
Linnéa torsdag

fråga: Jag tog bort det här:  // eslint-disable-next-line react-hooks/exhaustive-deps 
för jag förstod inte vad den gör och när jag tog bort den händer inget? Ska jag lägga tillbaka den? :D 

- Lade till rating i overlay i PopularMovies
- lade till releasedate i MovieDetails
- lade till link back to movies i MovieDetails
- kommenterade ut tillbaka-knappen Movie details
- pillat med css i movieDetails
- lade till en icon till Movies-link 

att göra: 
- Det vore coolt med ngn slags hover transform transision på länken

-----------------------------
började med att ändra filerna movieDetails.css och popularMovies.css (hade inte gått igenom att jag hade bytt till liten bokstav.)

-fixat lite olika css i movieDetails.css, media querie

-flyttat utbbackgroundImages style till en funktion i MoviDetails.js

-rating "knapp"