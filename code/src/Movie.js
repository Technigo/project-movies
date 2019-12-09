import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import burgers from 'data/burgers.json'


export const Movie = () => {
  // const params = useParams() "This is a hook to get a value and do what we want with it"... What does that mean?
  // const burgerMatch = burgers.find((burgers) => burger.slug === params.slug)
  // console.log(burgerMatch)

  return (

    <main>
      <span>
        <Link to="/">Go back</Link>
      </span>
      Här ska det vara en stor background och en mindre bild.
      <div className="img-container">
        {/* <Burger name={burgerMatch.name} image={burgerMatch.img} /> */}
      </div>
    </main>
  )
}
