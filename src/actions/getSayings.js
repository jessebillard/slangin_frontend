import { GET_SAYINGS } from './types'

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