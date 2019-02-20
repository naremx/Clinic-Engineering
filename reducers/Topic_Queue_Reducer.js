const INITIAL_STATE = {
    collection: {},
};

const Topic_Queue_Reducer = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'DATA_ADD_QUEUE' :
                return {
                    ...state,
                    collection: action.payload,
                };
            default:
                return state;
        }
}

export default Topic_Queue_Reducer;