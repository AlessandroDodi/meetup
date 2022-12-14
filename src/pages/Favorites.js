import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import FavoritesContext from '../components/store/favorites-context'
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)
  let content
  if (favoritesCtx.totalFavorites == 0) {
    content = <p>You haven't added any favorites yet.</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }
  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage
