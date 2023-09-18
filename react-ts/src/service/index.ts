import { httpClient} from "@/api";
import {AxiosResponse} from 'axios';
import {setToken} from "@/service/helper.ts";

interface IFormDataDto {
    mail: string;
    password: string;
}

interface ResponseData {
    token:{ access_token: string; },
    status: number
}

export const handleRegistration = async (formData: IFormDataDto) => {
    try {
        const response = await httpClient.post('/auth/register', formData);
        if(response.status === 200 ){
            await handleLogIn(formData)
            return response.status
        }else{
            throw new Error('error')
        }

    } catch (error: unknown) {
        console.error('Registration error:', error);
    }
};

export const handleLogIn = async (formData: IFormDataDto): Promise<number | undefined> => {
    try {
        const response: ResponseData = await httpClient.post('/auth/login', formData);
        if(response.status === 200) {
            setToken(response.token.access_token)
        return response.status
        }
    } catch (error: unknown) {
        console.error('Login error:', error);
        throw error;
    }
};

export const getPopularCards = async() => {
    try{
       return  await httpClient.get('/post/popular')
    }catch (error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}