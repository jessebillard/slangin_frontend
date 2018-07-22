import { GET_SAYINGS } from './types'
import { SELECTED_SAYING } from './types'
import { SayingsAdapter } from '../adapters/index'
import { CREATE_SAYING } from './types'
import { GET_REGIONS } from './types'

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
        SayingsAdapter.createSaying(saying)
            .then(saying => {
                dispatch({
                    type: CREATE_SAYING,
                    saying
                })
            })
    }
}