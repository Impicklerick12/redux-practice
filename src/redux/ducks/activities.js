import { v4 as uuidv4 } from 'uuid'

const initialState = [{
    id: 1,
    name: "Workout",
    duration: "2 hours"
}];

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "CREATE_ACTIVITY":
            return [
                ...state, {
                    // assign uniwque id using uuid extension
                    id: uuidv4(),
                    name: payload.name,
                    duration: payload.duration
                }
            ]
        case "DELETE_ACTIVITY":
            // create a copy state, to alter immutably
            let copyState = [...state]
            // filter all activities to a new variable, removing the activity id coming from payload
            let updatedActivities = copyState.filter((a) => a.id !== payload.id)
            return [
                ...updatedActivities
            ]
        default: {
            return state
        }
    }
}