const baseURL = 'http://localhost:3000/api/v1'

export class SayingsAdapter {

    static getRegions() {
        return fetch(`${baseURL}/regions`).then(resp => resp.json())
    }

    static createSaying(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${baseURL}/sayings`, options).then(resp => resp.json())
    }

}