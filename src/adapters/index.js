const baseURL = 'http://localhost:3000/api/v1'

export class SayingsAdapter {

    static getRegions() {
        return fetch(`${baseURL}/regions`).then(resp => resp.json())
    }

    static createSaying(formData) {
        const options = {
            method: 'POST',
            // APPARENTLY YOU DON'T INCLUDE HEADERS WITH FORMDATA!!!
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: formData
        }
        return fetch(`${baseURL}/sayings`, options).then(resp => resp.json())
    }

    static addVoteToSaying(data, id) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${baseURL}/sayings/${id}`, options).then(resp => resp.json())
    }

    static getRecording(id) {
        // down the line, won't be converting this recording response to json...just linking them up for now
        return fetch(`${baseURL}/sayings/${id}`)
            .then(resp => resp.blob())
            .then(audioBlob => {
                const objURL = URL.createObjectURL(audioBlob)
                return objURL
            })
    }

}