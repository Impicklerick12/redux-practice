import React, { useEffect } from 'react'
import '../styles/app.css'
import { useSelector } from 'react-redux'
import Counter from '../Counter'

import { useDispatch } from 'react-redux'
import { reset } from '../redux/ducks/counter' 

const CounterComponent = () => {

    const dispatch = useDispatch();

    const count = useSelector(state => state.counter.count);
    const user = useSelector(state => state.user.user);

    const names = ["Tyler", "Bob", "Foo"]

    // reset component only resets the total count, not individual votes
    const handleReset = () => {
        dispatch(reset())
      }

    return (
        <div className="counter">
            <div className="heading">
                <h1>REDUX PRACTICE</h1>
            </div>
            { user && (
                <div>
                <h1>Hello, {user.firstName}</h1>
                </div>
            )}
            <div className="count">
                <h2>The total count is: <strong>{count}</strong></h2>
            </div>
            <div className="counters">
                { names.map((name) => 
                <Counter name={name} />
                )}
            </div>
            <button onClick={handleReset} style={{textAlign: "center"}}>Reset</button>
        </div>
    )
}

export default CounterComponent
