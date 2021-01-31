import React, { useEffect } from 'react'
import './styles/app.css'
import { getUser } from './redux/ducks/user'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Counter,
  WorkoutTracker,
  ThunkUsers,
  Posts,
  BTCTracker
} from './Exports'

import { useDispatch } from 'react-redux'

require('dotenv').config();

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  const links = [
    {
      href: '/counter',
      text: 'Counter'
    },
    {
      href: '/workout',
      text: 'Workout Tracker'
    },
    {
      href: '/users',
      text: 'Find Users'
    },
    {
      href: '/posts',
      text: 'Posts'
    },
    {
      href: '/btc',
      text: 'BTC Tracker'
    },
  ]

  return (
    <div className="container">
      <BrowserRouter>
        <ul className="navbar">
          { links.map(link => (
            <li>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <h1>Home</h1>
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/workout" component={WorkoutTracker} />
          <Route exact path="/users" component={ThunkUsers} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/btc" component={BTCTracker} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;