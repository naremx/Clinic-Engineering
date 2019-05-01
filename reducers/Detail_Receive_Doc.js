const INITIAL_STATE = {
    ReceiveDoc: {},
};

const Detail_Receive_Doc = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'RECEIVE_DOC' :
                return {
                    ...state,
                    ReceiveDoc: action.payload 
                };
            default:
                return state;
        }
}

export default Detail_Receive_Doc;