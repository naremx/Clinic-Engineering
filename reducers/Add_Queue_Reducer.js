const INITIAL_STATE = {
    val: {},
};

const Add_Queue_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'ADD_QUEUE' :
                return {
                    ...state,
                    val: action.payload
                };
            default:
                return state;
        }
}

export default Add_Queue_Reducer;