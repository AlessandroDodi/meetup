import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetup'
import FavoritesPage from './pages/Favorites'

function App() {
  const navigate = useNavigate()

  return (
    <div>
      <a
        type="button"
        href="/"
        onClick={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        home
      </a>
      <a
        type="button"
        href="/favorites"
        onClick={(e) => {
          e.preventDefault()
          navigate('/favorites')
        }}
      >
        fav
      </a>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
