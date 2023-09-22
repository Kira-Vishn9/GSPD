import Axios from 'axios'
import {apiEnv} from "@config/env.ts";

export { type AxiosResponse } from 'axios'
export const httpClient = Axios.create({
    baseURL: apiEnv.baseUrl,
    withCredentials: true,
    headers: {
        'Authorization': localStorage.getItem('authToken'),
        'userid': localStorage.getItem("userId")
    }
})

// httpClient.interceptors.response.use((axiosResponse) => axiosResponse.data)