import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Activity = (props) => {

    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)

    const deleteActivity = (event) => {
        event.preventDefault()

        dispatch({
            type: "DELETE_ACTIVITY",
            payload: {
                id: props.id
            }
        })
    }

    return (
        <div className="activity-wrapper">
            <p>Activity: {props.name}</p>
            <p>Duration: {props.duration}</p>
            <button onClick={deleteActivity}>Delete</button>
        </div>
    )
}

export default Activity