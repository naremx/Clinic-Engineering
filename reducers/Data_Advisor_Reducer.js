const INITIAL_STATE = {
    val: {},
};

const Data_Advisor_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'ADD_DATA_ADVISOR' :
                return {
                    ...state,
                    val: action.payload
                };
            default:
                return state;
        }
}

export default Data_Advisor_Reducer;