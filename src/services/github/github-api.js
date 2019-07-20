import axios from 'axios'

async function getRepositories(gitUser) {
    const response = await doRequest('https://api.github.com/users/' + gitUser + '/repos').catch(err => {
        if (err.response.status === 401) { }
    })
    
    return response
}

async function getCommits(gitUser, repositoryName) {
    const response = await doRequest('https://api.github.com/repos/'  + gitUser +
        '/' + repositoryName + '/commits').catch(err => {
        if (err.response.status === 401) { }
    })
    
    return response
}

function doRequest(url) {
    const body = {}
    const config = createRequestConfig()

    return axios.get(url, body, config)
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
    getRepositories,
    getCommits
}