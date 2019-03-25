export const getToken = (token, role, data) => {
    return { 
        type: 'Login', 
        payload: { token, role, data } 
    };
}