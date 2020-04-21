import axios from './utils/http'

export function apiTest1(params?: object, config?: object) {
    return axios.post('/api/data', params, { ...config })
}

export function apiTest2(params?: object, config?: object) {
    return axios.get('/api/data1', params, { ...config })
}

export function apiTest3(params?: object, config?: object) {
    return axios.post('/api/data', params, { ...config })
}

export function apiTest4(params?: object, config?: object, err?: string) {
    return axios.post('/api/data22', params, { ...config }, err)
}
