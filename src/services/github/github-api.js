import axios from 'axios'

async function getRepositories(gitUser) {
    const response = await doRequest(gitUser).catch(err => {
        if (err.response.status === 401) { }
    })
    
    return response
}

function doRequest(gitUser) {
    const body = {}
    const config = createRequestConfig()

    return axios.get('https://api.github.com/users/' + gitUser + '/repos', body, config)
}


function createRequestConfig() {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }
}

export{
    getRepositories
}