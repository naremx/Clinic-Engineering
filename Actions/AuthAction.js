export default getToken = ({ token, role }) => {
    return { type: 'Login', payload: { token, role } };
}
