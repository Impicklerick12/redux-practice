import React, { useEffect } from 'react'
import './styles/app.css'
import { useSelector } from 'react-redux'
import { getUser } from './redux/ducks/user'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Counter,
  WorkoutTracker
} from './Exports'

import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

  return (
    <div className="container">
      <BrowserRouter>
        <ul className="navbar">
          <li>
            <a href="/counter">Counter</a>
          </li>
          <li>
            <a href="/workout">Workout Tracker</a>
          </li>
        </ul>
        <h1>Home</h1>
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/workout" component={WorkoutTracker} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;