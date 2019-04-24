const INITIAL_STATE = {
    DetailSubDoc: {},
};

const User_Detail_Sub_Doc = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'DETAIL_SUB_DOC' :
                return {
                    ...state,
                    DetailSubDoc: action.payload
                };
            default:
                return state;
        }
}

export default User_Detail_Sub_Doc;