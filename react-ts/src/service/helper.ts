const keyToken = 'authToken'

export const getToken = () => {
    return localStorage.getItem(keyToken)
}

export const setToken = (token: string) => {
    localStorage.setItem(keyToken, 'Bearer ' + token)
}

export const removeToken = () => {
    localStorage.removeItem(keyToken)
}