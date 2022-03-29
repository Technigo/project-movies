import React from 'react'
import PopularList from 'components/PopularList'
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <section>
      <h1>Popular Movies</h1>
      <PopularList  />
    </section>
  )
}

export default App
