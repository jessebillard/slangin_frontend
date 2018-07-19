export default (state = {
    sayings: [],
    selectedRegion: '',
    selectedSaying: ''
}, action) => {
    switch (action.type) {
        case 'GET_SAYINGS':
            return {
                ...state,
                selectedRegion: action.region
            }
            // debugger;
        default:
            return state
    }
}