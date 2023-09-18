import Axios from 'axios'

export { type AxiosResponse } from 'axios'
export const httpClient = Axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: {'Authorization': localStorage.getItem('authToken')}
})

httpClient.interceptors.response.use((axiosResponse) => axiosResponse.data)