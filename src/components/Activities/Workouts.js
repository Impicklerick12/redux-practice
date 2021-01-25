import React, { useState } from 'react'
import Activity from './Activity'
import { useSelector } from 'react-redux'
import AddActivity from './AddActivity'

const Workouts = () => {

    const activities = useSelector(state => state.activities)
    const [add, setAdd] = useState(false)
    console.log("All activities: ", activities)

    return (
        <div className="workouts-wrapper">
            <h2>My Workouts</h2>
            <button onClick={() => setAdd(!add)}>Add Activity</button>
            { add && <AddActivity />}

            { activities.map(({id, name, duration}) => {
                return <Activity key={id} id={id} name={name} duration={duration}/>
            })}
        </div>
    )
}

export default Workouts
