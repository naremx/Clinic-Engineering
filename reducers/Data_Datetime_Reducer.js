const INITIAL_STATE = {
    chosenDate: {},
};
const Data_Datetime_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'DATA_DATETIME' :
                return {
                    ...state,
                    chosenDate: action.payload
                };
            default:
                return state;
        }
}

export default Data_Datetime_Reducer;