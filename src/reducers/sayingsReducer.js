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
        case 'SELECTED_SAYING':
            return {
                ...state,
                selectedSaying: action.saying
            }
        case 'CREATE_SAYING':
            return {
                ...state,
                sayings: [...state.sayings, action.saying]
            }
        default:
            return state
    }
}