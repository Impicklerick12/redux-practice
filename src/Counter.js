import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './redux/ducks/counter'
import './styles/app.css'

const Counter = ({name}) => {
    const dispatch = useDispatch();

    const [votes, setVotes] = useState(0)

    const handleincrement = () => {
        dispatch(increment())
        setVotes(votes + 1)
    }

    const handleDecrement = () => {
        dispatch(decrement())
        setVotes(votes - 1)
    }

    return (
        <div className="name-counters">
            <h2>{name}</h2>
            <h3>{`Votes: ${votes}`}</h3>
            <div className="counter-buttons">
                <button onClick={handleincrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter
