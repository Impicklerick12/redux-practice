import axios from 'axios'
import moment from 'moment'
const { REACT_APP_BITCOIN_API_KEY } = process.env

export const fetchData = ({time, number}) => async (dispatch) => {
   try {
        dispatch({
            type: "AWAITING_BITCOIN"
        })
        // set the url based on if the incoming time argument is "Daily", which has a different URL
        let url = (time === "Daily") ? `https://financialmodelingprep.com/api/v3/historical-price-full/BTCUSD?apikey=${REACT_APP_BITCOIN_API_KEY}` : `https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=${REACT_APP_BITCOIN_API_KEY}`
        const response = await axios.get(url)
        // sort the response data; daily data gas extra 'historical' property
        const bitcoinData = response.data.hasOwnProperty('historical') ? response.data.historical : response.data
        
        const labels = []
        const data = []
        for (let i = 0; i < bitcoinData.length; i++) {
            data.unshift(bitcoinData[i].close)
            labels.unshift(moment(bitcoinData[i].date).format('LLL'))
            if (i === (number - 1)) break
        }

        dispatch({
            type: "SUCCESS_BITCOIN",
            payload: {
                data,
                labels
            }
        })
   } catch (e) {
       dispatch({
           type: "REJECTED_BITCOIN"
       })
   }
    console.log("inside action")
}