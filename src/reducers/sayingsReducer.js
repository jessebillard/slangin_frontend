export default (state = {
    regions: [],
    selectedRegion: '',
    sayings: [],
    selectedSaying: '',
    currentBlob: '',
    currentRecording: '',
    currentTags: [],
    sayingsBelongingToTag: [],
    currentTag: '',
    containerPath: ''
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
            return {
                ...state,
                sayings: [...currentRegion.sayings, action.saying],
                selectedRegion: action.saying.region.name
            }
        case 'SET_CURRENT_RECORDING':             
            return {
                ...state,
                sound: action.sound
            }
        case 'ADD_VOTE_TO_SAYING':            
            const saying = state.sayings.find(saying => saying.id === action.saying.id)
            const index = state.sayings.indexOf(saying)  
            const sayingsCopyOldSayingRemoved = [...state.sayings.slice(0, index), ...state.sayings.slice(index + 1)]
            return {
                ...state,
                sayings: [...sayingsCopyOldSayingRemoved, action.saying]
            }
        case 'ADD_SAYING_RECORDING':            
            return {
                ...state,
                currentBlob: action.recording.blob,
                currentRecording: action.recording.sound
            }
        case 'GET_TAGS':
            // debugger;
            return {
                ...state,
                currentTags: action.tags
            }
        case 'GET_SAYINGS_FROM_TAG':
            // debugger;
            return {
                ...state,
                sayingsBelongingToTag: action.sayings
            }
        case 'UPDATE_CURRENT_TAG':
            return {
                ...state,
                currentTag: action.tag
            }
        case 'UPDATE_CONTAINER_PATH':
            // debugger;
            return {
                ...state,
                containerPath: action.path
            }
        default:
            return state
    }
}