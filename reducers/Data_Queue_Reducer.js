const INITIAL_STATE = {
    dataqueue: {},
};

const Data_Queue_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'DATA_DATETIME' :
                return {
                    ...state,
                    dataqueue: action.payload 
                };
            default:
                return state;
        }
}

export default Data_Queue_Reducer;