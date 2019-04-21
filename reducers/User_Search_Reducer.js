const INITIAL_STATE = {
    data: {},
};

const User_Search_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'USER_SEARCH_DATA' :
                return {
                    ...state,
                    data: action.payload
                };
            default:
                return state;
        }
}

export default User_Search_Reducer;