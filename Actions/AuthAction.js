export const getToken = (token, role) => {
    return { 
        type: 'Login', 
        payload: { token, role } 
    };
}