import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddActivity = () => {

    const dispatch = useDispatch();

    const initialState = {
        name: "",
        duration: ""
    }
    const [data, setData] = useState(initialState);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    const addActivity = (event) => {
        event.preventDefault();
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: data
        })
    }

    return (
        <div>
            <div>
                <p>Activity: </p>
                <input onChange={handleChange} name={"name"} placeholder={"Activity name..."} />
            </div>
            <div>
                <p>Duration: </p>
                <input onChange={handleChange} name={"duration"} placeholder={"Time..."} />
            </div>
            <button onClick={addActivity}>Add</button>
        </div>
    )
}

export default AddActivity
