import { httpClient} from "@/api";
import {setToken} from "@/service/helper.ts";
import {CommentData, justCard} from "@/Interface/Interface.ts";

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
        const data = await httpClient.get('/post/popular')
        return data
    }catch (error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}


export const getPopular = async(type: string, count: number) => {
    try{
        const data = await httpClient.get(`/post/popular/${type}?count=${count}`)
        return data
    }catch (error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}

export const postNewReview = async(data: justCard) => {
    try{
        return  await httpClient.post('/post/create', data)
    }catch (error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}

export const openCard = async (cardId: string, page: number) => {
    try{
        return  await httpClient.get(`/post/${cardId}?page=${page}`)
    }catch (error: unknown){
        console.error('Login error:', error);
        throw error;
    }
};

export const addNewComment = async (postId: string | undefined, commentData: CommentData) => {
    try{
        const response = await httpClient.post(`/post/${postId}/comment`, commentData);
        return response
    }catch(error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}