import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { PopularList } from './Pages/PopularList'


export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< PopularList />}/>
    </Routes>
    </BrowserRouter>
  )
}
