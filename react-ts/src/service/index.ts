import { httpClient} from "@/api";

interface IFormDataDto {
    mail: string;
    password: string;
}
export const handleRegistration = async (formData: IFormDataDto) => {
    try {
        const response = await httpClient.post('/auth/register', formData);
        // await handleLogIn(formData, response.status)
        console.log('Registration response:', response);
    } catch (error: unknown) {
        console.error('Registration error:', error);
    }
};
//
// export const handleLogIn = async (formData: IFormDataDto, otherStatus?: number) => {
//     try {
//         const response = await httpClient.post('/auth/login', formData);
//         if (response.status === 200 || otherStatus === 200) {
//             localStorage.setItem('authToken', 'Bearer ' + response?.token)
//         }
//         return response.status
//     } catch (error: unknown) {
//         console.error('Registration error:', error);
//     }
// }
