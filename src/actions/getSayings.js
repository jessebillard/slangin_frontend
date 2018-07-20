import { GET_SAYINGS } from './types'
import { SELECTED_SAYING } from './types'
import { SayingsAdapter } from '../adapters/index'

export const getAllRegions = () => {
    return dispatch => {
        SayingsAdapter.getRegions()
            .then(regions => {
                dispatch({
                    type: "GET_REGIONS",
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