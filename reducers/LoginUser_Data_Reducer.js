const INITIAL_STATE = {
    data: {},
};

const LoginUser_Data_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'Login_data' :
                return {
                    ...state,
                    data: action.payload 
                };
            default:
                return state;
        }
}

export default LoginUser_Data_Reducer;