const weatherForecast = (state = [], action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return action.payload;
        case 'RESET_WEATHER':
            return [];
        default:
            return state;
    }
}

export default weatherForecast;