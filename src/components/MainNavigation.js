import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
console.log(classes)

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="favorites">My favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
