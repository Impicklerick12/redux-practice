const initalState = {
    loading: false,
    labels: [],
    datasets: [{
        label: "BTC",
        data: [],
        backgroundColor: "rgba(238, 175, 0, 0.4)",
        borderColor: "rgba(238, 175, 0, 0,5)",
        pointBorderColor: "rgba(238, 175, 0, 0.7)"
    }]
}

export default (state = initalState, action) => {
    const {type, payload} = action
    switch (type) {
        case "AWAITING_BITCOIN":
            return {
                ...state, 
                loading: true
            }
        case "REJECTED_BITCOIN":
            return {
                ...state,
                loading: false
            }
        case "SUCCESS_BITCOIN":
            return {
                ...state,
                labels: [],
                datasets: [{
                    label: "BTC",
                    data: [],
                    backgroundColor: "rgba(238, 175, 0, 0.4)",
                    borderColor: "rgba(238, 175, 0, 0,5)",
                    pointBorderColor: "rgba(238, 175, 0, 0.7)"
                }]
            }
        default:
            return state
    }
}