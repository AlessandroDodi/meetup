import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainNavigation from './components/layout/MainNavigation'
import AllMeetupsPage from './pages/AllMeetup'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
