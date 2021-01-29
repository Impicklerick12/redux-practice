import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/thunk/requests/bitcoin'

const BTCTracker = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.bitcoin)

    const [number, setNumber] = useState(15)

    const data = {
        labels: ["11:00", "12:00"],
        datasets: [{
            label: "BTC",
            data: [4000, 5000],
            backgroundColor: "rgba(238, 175, 0, 0.4)",
            borderColor: "rgba(238, 175, 0, 0,5)",
            pointBorderColor: "rgba(238, 175, 0, 0.7)"
        }]
    }

    const timeIntervals = ["1min", "5min", "15min", "30min"]
    
    const fetchBitcoinData = (time) => {
        // fetch data from redux using time
        dispatch(fetchData({
            time,
            numberCount: number
        }))
    }

    return (
        <div>
            <h1>Bitcoin(BTC) Tracker</h1>
            <div className={"btns-wrapper"}>
                { timeIntervals.map((t) => (
                    <button onClick={() => fetchBitcoinData(t)}>{t}</button>
                ))}
                <input onChange={(e) => setNumber(e.target.value)} />
            </div>
            { state.loading && <p>Loading...</p>}
            <div className={"chart-wrapper"}>
                <Line
                    data={data}
                />
            </div>
        </div>
    )
}

export default BTCTracker