const INITIAL_STATE = {
    SelectDate: {},
};

const Advisor_Date_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'ADVISOR_DATA_DATE' :
                return {
                    ...state,
                    SelectDate: action.payload
                };
            default:
                return state;
        }
}

export default Advisor_Date_Reducer;