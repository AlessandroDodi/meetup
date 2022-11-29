import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetup'
import FavoritesPage from './pages/Favorites'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />}></Route>
      <Route path="/favorites" element={<FavoritesPage />}></Route>
    </Routes>
  )
}

export default App
