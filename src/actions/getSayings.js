import { GET_SAYINGS, 
    SELECTED_SAYING, 
    CREATE_SAYING, 
    GET_REGIONS, 
    ADD_VOTE_TO_SAYING, 
    ADD_SAYING_RECORDING, 
    SET_CURRENT_RECORDING,
    GET_TAGS,
    GET_SAYINGS_FROM_TAG
} from './types'
// import { SELECTED_SAYING } from './types'
// import { CREATE_SAYING } from './types'
// import { GET_REGIONS } from './types'
// import { ADD_VOTE_TO_SAYING } from './types'
// import { ADD_SAYING_RECORDING } from './types'
// import { SET_CURRENT_RECORDING } from './types'
import { SayingsAdapter } from '../adapters/index'
import Pizzicato from 'pizzicato'

export const getAllRegions = () => {
    return dispatch => {
        SayingsAdapter.getRegions()
            .then(regions => {
                dispatch({
                    type: GET_REGIONS,
                    payload: regions
                })
            })
    }
}

export const getSayings = (region) => {
    return {
        type: GET_SAYINGS,
        region
    }
}

export const selectSaying = (saying) => {
    return {
        type: SELECTED_SAYING,
        saying
    }
}

export const createSaying = (saying) => {
    return dispatch => {
        return SayingsAdapter.createSaying(saying)
            .then(saying => {
                dispatch({
                    type: CREATE_SAYING,
                    saying
                })
            })
    }
}

export const addVoteToSaying = (saying) => {
    return dispatch => {
        SayingsAdapter.addVoteToSaying(saying, saying.id)
            .then(saying => {
                dispatch({
                    type: ADD_VOTE_TO_SAYING,
                    saying
                })
            })
    }
}

export const getSayingRecording = (saying) => {
    return dispatch => {
        SayingsAdapter.getRecording(saying.id)
            .then(audioURL => {
                const sound = new Pizzicato.Sound({
                    source: 'file',
                    options: { path: [audioURL] }
                }, () => dispatch({
                    type: SET_CURRENT_RECORDING,
                    sound
                }))
            })
    }
}

export const addSayingRecording = (recording) => {
    return {
        type: ADD_SAYING_RECORDING,
        recording
    }
}

export const getSayingTags = (saying) => {
    return dispatch => {
        SayingsAdapter.getTags(saying)
            .then(tags => {
                dispatch({
                    type: GET_TAGS,
                    tags
                })
            })
    }
}

export const getAllSayingsFromTag = (id) => {
    return dispatch => {
        SayingsAdapter.getSayingsFromTag(id)
            .then(sayings => {
                dispatch({
                    type: GET_SAYINGS_FROM_TAG,
                    sayings
                })
            })
    }
}