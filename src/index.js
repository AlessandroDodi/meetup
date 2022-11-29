import { Route, Routes } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetup'
import FavoritesPage from './pages/Favorites'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/books" element={<FavoritesPage />} />
    </Routes>
  )
}
