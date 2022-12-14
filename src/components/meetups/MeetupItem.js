import React from 'react'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'
export default function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        url: props.url,
        address: props.address,
      })
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="placeholder" />
        </div>
        <div className={classes.content}>
          <h3 className={classes.title}>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to favorites '}
          </button>
        </div>
      </Card>
    </li>
  )
}
