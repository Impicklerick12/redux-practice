import React from 'react'
import { useDispatch } from 'react-redux'
import { 
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure
} from '../redux/ducks/asyncActions'

import { fetchUsers } from '../redux/thunk/requests/users'

const ThunkUsers = () => {

    const dispatch = useDispatch();

    const getUsers = async () => {
        // dispatch the request
        dispatch(fetchUsersRequest())
        fetchUsers()
            .then((res) => {
                // response.data is the array of users
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                // error.message is the error description
                dispatch(fetchUsersFailure(error.message))
            })
    }

    return (
        <div>
            <button onClick={getUsers}>Find users..</button>
        </div>
    )
}

export default ThunkUsers
