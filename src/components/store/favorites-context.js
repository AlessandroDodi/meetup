import { createContext, useState } from 'react'
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
})

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup),
    )
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId),
    )
  }

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  }
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
