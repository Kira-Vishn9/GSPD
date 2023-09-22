import { httpClient} from "@/api";
import {setToken} from "@/service/helper.ts";
import {CommentData, justCard} from "@/Interface/Interface.ts";

interface IFormDataDto {
    mail: string;
    password: string;
}

export const handleRegistration = async (formData: IFormDataDto) => {
        const response = await httpClient.post('/auth/register', formData);
        if(response.data.status === 200 ){
            await handleLogIn(formData)
            return response.status
        }else{
            throw new Error('error')
        }
};

export const handleLogIn = async (formData: IFormDataDto): Promise<void> => {
    try {
        const response = await httpClient.post('/auth/login', formData);
        setToken(response.data.token.access_token)
        localStorage.setItem("userId", response.data.token.id)
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

export const postNewReview = async (data: justCard) => {
    try{
        return await httpClient.post('/post/create', data)
    }catch (error: unknown){
        console.error('Post error:', error);
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

export const targetLike = async (postId: string | undefined, ) => {
    try{
        const response = await httpClient.post(`/post/${postId}/like`);
        return response
    }catch(error: unknown){
        console.error('Like error:', error);
        throw error;
    }
}
export const checkLike = async (postId: string | undefined, ) => {
    try{
        const response = await httpClient.post(`/post/${postId}/like/check`);
        return response
    }catch(error: unknown){
        console.error('Like error:', error);
        throw error;
    }
}


export const getSpecialPost = async (type: string, page: number) => {
    try{
        const res =  await httpClient.get(`/post/special/${type}?page=${page}`);
        return res
    }catch(error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}

export const getProfilePost = async () => {
    try{
        const res =  await httpClient.get(`/post/profile`);
        return res
    }catch(error: unknown){
        console.error('Login error:', error);
        throw error;
    }
}

export const addReviewFromUser = async (postId: string | undefined, data: { grade: number} ) => {
    try{
        const response = await httpClient.post(`/post/${postId}/rating`, data);
        return response
    }catch(error: unknown){
        console.error('Like error:', error);
        throw error;
    }
}

export const checkReviewFromUser = async (postId: string | undefined ) => {
    console.log(localStorage.getItem('userId'))
    const id = localStorage.getItem('userId')
    try{
        const response = await httpClient.get(`/post/${postId}/rating/check/${id}`);
        console.log(response)
        return response
    }catch(error: unknown){
        console.error('Like error:', error);
        throw error;
    }
}