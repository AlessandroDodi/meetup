import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllMeetupsPage from './pages/AllMeetup'
import FavoritesPage from './pages/Favorites'
import NewMeetupPage from './pages/NewMeetup'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
