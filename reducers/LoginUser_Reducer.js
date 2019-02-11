const INITIAL_STATE = {
    token: '',
    role: ''
};

const LoginUser_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'Login' :
                return {
                    ...state,
                    token: action.payload.token,
                    role: action.payload.role
                };
            default:
                return state;
        }
}

export default LoginUser_Reducer;