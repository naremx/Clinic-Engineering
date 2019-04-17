const INITIAL_STATE = {
    AdDateTimeDetail: {},
};

const Ad_Select_Time_Detail_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'AD_SELECT_TIME_DETAIL' :
                return {
                    ...state,
                    AdDateTimeDetail: action.payload
                };
            default:
                return state;
        }
}

export default Ad_Select_Time_Detail_Reducer;