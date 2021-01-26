import React, { useEffect } from 'react'
import './styles/app.css'
import { getUser } from './redux/ducks/user'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Counter,
  WorkoutTracker,
  ThunkUsers,
  Posts
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
          <li>
            <a href="/users">Find Users</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
        <h1>Home</h1>
        <Switch>
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/workout" component={WorkoutTracker} />
          <Route exact path="/users" component={ThunkUsers} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;