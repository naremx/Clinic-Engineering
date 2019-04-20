const INITIAL_STATE = {
    UserDateTimeDetail: {},
};

const User_Select_Time_Detail_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'USER_SELECT_TIME_DETAIL' :
                return {
                    ...state,
                    UserDateTimeDetail: action.payload
                };
            default:
                return state;
        }
}

export default User_Select_Time_Detail_Reducer;