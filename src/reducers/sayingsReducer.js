export default (state = {
    regions: [],
    selectedRegion: '',
    sayings: [],
    selectedSaying: '',
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
            const currentRegion = state.regions.find(region => region.name === action.saying.region.name)    
            // debugger;        
            return {
                ...state,
                sayings: [...currentRegion.sayings, action.saying],
                selectedRegion: action.saying.region.name
            }
        case 'ADD_VOTE_TO_SAYING':
            // debugger;
            const saying = state.sayings.find(saying => saying.id === action.saying.id)
            const index = state.sayings.indexOf(saying)  
            const sayingsCopyOldSayingRemoved = [...state.sayings.slice(0, index), ...state.sayings.slice(index + 1)]
            return {
                ...state,
                sayings: [...sayingsCopyOldSayingRemoved, action.saying]
            }
        case 'ADD_SAYING_RECORDING':
            debugger;
        default:
            return state
    }
}