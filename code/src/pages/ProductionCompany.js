import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { LoadingSpinner } from 'components/LoadingSpinner'

export const ProductionCompany = () => {

  //Destructuring to get the company id key from the url params, called id beacuse that is what we named it in the path in App.js
  const { companyId } = useParams()

  //My API key
  const apiKey = "f16bd1845da3bcbe9df17f656b96d33b"

  //Loading state to show loading mean while API is fetched
  // const [loading, setLoading] = useState(true)
  //Need a state to map the data about movie
  const [company, setCompany] = useState([])
  //To set error state if movie not found
  // const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/company/${companyId}?api_key=${apiKey}`)
      .then((res) => res.json()) //Get the json of company
      .then((json) => {
        setCompany(json)
        console.log(json)
      })
  }, [companyId])


  return (
    <main>
      <h1>{company.name}</h1>

    </main>

  )
}