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
        return fetch(`${baseURL}/sayings/${id}`)
            .then(resp => resp.blob())
            .then(audioBlob => {
                const objURL = URL.createObjectURL(audioBlob)
                return objURL
            })
    }

    static getTags(saying) {
        // const options = {
        //     body: JSON.stringify(saying)
        // }
        return fetch(`${baseURL}/tags/${saying}`)
            .then(resp => resp.json())    
    }

    static getSayingsFromTag(id) {
        return fetch(`${baseURL}/tags/${id}/sayings`)
            .then(resp => resp.json())
    }

}