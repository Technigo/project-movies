import React from 'react'
import { Link } from 'react-router-dom'
// import burgers from 'data/burgers.json'
// NavLinlk är användbart ist för Link om jag vill stylea länken för sidan jag är på/visa vilken sida jag är på. Det skapar en class "active" so mjag kan stylea i css -> a.active{}

// för all data: https://api.themoviedb.org/3/movie/popular?api_key=2a89f9965a48e33d809fbd966cc6a018&language=en-US&page=1

export const MovieList = () => {
  const api_key = ("2a89f9965a48e33d809fbd966cc6a018")

  fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json)
    }
    )

  return (
    // <section className="movies">
    //   {images.map((props) =>(
    //     <Link key={props.results.id} to={`/about/${props.id}`}>
    //       <Movie image={props.image} />
    //     </Link>
    // ) 
    //       )
    // }

    // </section >
    <main>
      Hej hej här är massa bilder fångade genom api och fetch. Men också useState och useEffect?
    <ul>
        <li>
          <Link to="/movie/:movieId">Film 1, länken måste kopplas till API, så att det blir rätt länk</Link>
        </li>
      </ul>
    </main >
  )
}
