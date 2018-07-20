const baseURL = 'http://localhost:3000/api/v1'

export class SayingsAdapter {

    static getRegions() {
        return fetch(`${baseURL}/regions`).then(resp => resp.json())
    }

    // static getRegionSayings(region) {
    //     return fetch(`${baseURL}`)
    // }
}