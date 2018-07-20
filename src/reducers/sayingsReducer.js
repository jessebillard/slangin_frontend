export default (state = {
    regions: [],
    selectedRegion: '',
    sayings: [],
    selectedSaying: ''
}, action) => {
    switch (action.type) {
        case 'GET_SAYINGS':
            const region = state.regions.find(region => region.name === action.region.toLowerCase())
            return {
                ...state,
                sayings: region.sayings,
                selectedRegion: region.name
            }
        case 'GET_REGIONS':
            return {
                ...state,
                regions: action.payload,
            }
        default:
            return state
    }
}