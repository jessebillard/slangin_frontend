import { GET_SAYINGS } from './types'

export const getSayings = (region) => {
    return {
        type: GET_SAYINGS,
        region
    }
}