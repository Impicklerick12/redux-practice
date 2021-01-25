import axios from 'axios'

export function requestGetUser() {
    return axios.request({
        method: 'get',
        url: 'https://my-json-server.typicode.com/Impicklerick12/demo/user'
    })
}