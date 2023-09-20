import Axios from 'axios'
import {apiEnv} from "@config/env.ts";
import {getToken} from "@/service/helper.ts";

export { type AxiosResponse } from 'axios'
export const httpClient = Axios.create({
    baseURL: apiEnv.baseUrl,
    withCredentials: true,
    headers: {'Authorization': getToken()}
})

// httpClient.interceptors.response.use((axiosResponse) => axiosResponse.data)