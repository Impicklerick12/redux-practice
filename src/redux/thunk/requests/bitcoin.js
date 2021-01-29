import axios from 'axios'

export const fetchData = ({time, number}) => async (dispatch) => {
   try {
        dispatch({
            type: "AWAITING_BITCOIN"
        })

        // const response = await
   } catch (e) {
       console.log(e)
   }
    console.log("inside action")
}