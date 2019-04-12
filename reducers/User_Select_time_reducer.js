const INITIAL_STATE = {
    collectionUserSelectTime: {},
};

const User_Select_time_reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'USER_SELECT_TIME' :
                return {
                    ...state,
                    collectionUserSelectTime: action.payload 
                };
            default:
                return state;
        }
}

export default User_Select_time_reducer;